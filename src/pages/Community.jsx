// Community.jsx
import { useState, useEffect } from 'react';
import { Camera, LogOut, LogIn, MapPin, Tag, User as UserIcon, Calendar, Trash2, Upload } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UploadPhoto from './UploadPhoto';
import './Community.css';
import LikeButton from '../components/shared/LikeButton'; 
import { Heart } from 'lucide-react'; // Add to imports
import { likePhoto } from '../api/photoApi'; // Import the function
export default function Community() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));
  const [photos, setPhotos] = useState([]);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [photoToDelete, setPhotoToDelete] = useState(null);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  // Fetch photos from backend
  const loadPhotos = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/photos`);
      setPhotos(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load photos");
    }
  };
  useEffect(() => {
    loadPhotos();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    toast.success('Logged out successfully');
  };

  const openDeleteConfirm = (photoId) => {
    setPhotoToDelete(photoId);
    setDeleteConfirmOpen(true);
  };
  const handleDeletePhoto = async () => {
    if (!photoToDelete) return;
    try {
      await axios.delete(`${API_URL}/api/photos/${photoToDelete}`);
      toast.success("Photo deleted successfully");
      setDeleteConfirmOpen(false);
      setPhotoToDelete(null);
      loadPhotos();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete photo");
    }
  };
  const handleUploadClick = () => {
    if (!currentUser) {
      toast.error('Please login to share a photo');
      navigate('/login');
    } else {
      setUploadDialogOpen(true);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  // PhotoCard Component
  const PhotoCard = ({ photo }) => {
    const canDelete = currentUser && (currentUser.id === photo.uploadedBy || currentUser.isAdmin);
    return (
      <div className="photo-card">
        <div className="photo-card-image">
          <img
            src={`${API_URL}${photo.imageUrl}`}
            alt={`Photo from ${photo.country}`}
            className="photo-image"
          />
        </div>
        <div className="photo-card-content">
          <div className="photo-info-item">
            <MapPin className="photo-icon" />
            <span>{photo.country}</span>
          </div>
          <div className="photo-info-item">
            <Tag className="photo-icon" />
            <span>{photo.category}</span>
          </div>
          <div className="photo-info-item">
            <UserIcon className="photo-icon" />
            <span>{photo.uploaderName}</span>
          </div>
          <div className="photo-info-item photo-date">
            <Calendar className="photo-date-icon" />
            <span>{formatDate(photo.uploadedAt)}</span>
          </div>
          
          <div className="photo-info-item">
            <LikeButton 
              photoId={photo._id} 
              initialLikes={photo.likes || 0}
              onLikeSuccess={(newLikes) => {
                const updatedPhotos = photos.map(p => 
                  p._id === photo._id ? { ...p, likes: newLikes } : p
                );
                setPhotos(updatedPhotos);
              }}
            />
          </div>
        </div>
            {canDelete && (
          <div className="photo-card-footer">
            <button className="delete-button" onClick={() => openDeleteConfirm(photo._id)}>
              <Trash2 className="delete-icon" />
              Delete Photo
            </button>
          </div>
        )}
      </div>
    );
  };
  // ← NEW: Best Pics Sidebar Component
  const BestPicsSidebar = ({ photos }) => {
    const [winners, setWinners] = useState({});
    useEffect(() => {
      calculateWinners();
    }, [photos]);
    const calculateWinners = () => {
      const categories = ['Nature', 'Urban', 'Architecture', 'Wildlife'];
      const categoryWinners = {};
      categories.forEach(category => {
        const categoryPhotos = photos.filter(p => p.category === category);
             if (categoryPhotos.length === 0) {
          categoryWinners[category] = null;
          return;
        }
        // Calculate score: likes per day
        const photosWithScores = categoryPhotos.map(photo => {
          const likes = photo.likes || 0;
          if (likes < 3) return { ...photo, score: 0 }; // Minimum threshold
          const daysSince = Math.max(
            (Date.now() - new Date(photo.uploadedAt)) / (1000 * 60 * 60 * 24),
            1
          );
          return { ...photo, score: likes / daysSince };
        });
        // Pick highest score
        const winner = photosWithScores
          .filter(p => p.score > 0)
          .sort((a, b) => b.score - a.score)[0];
        categoryWinners[category] = winner || null;
      });
      setWinners(categoryWinners);
    };
    const categoryIcons = {
      Nature: '🌲',
      Urban: '🏙️',
      Architecture: '🏛️',
      Wildlife: '🦁'
    };
    return (
      <div className="sidebar-container">
        <div className="sidebar-header">
          <div className="sidebar-title">
            <span className="trophy-icon">🏆</span>
            <h3>Top Photos This Week</h3>
          </div>
          <p className="sidebar-subtitle">Based on likes per day</p>
        </div>
        <div className="winners-list">
          {Object.keys(winners).map(category => {
            const winner = winners[category];
            if (!winner) return null;
            return (
              <div key={category} className="winner-card-compact">
                <div className="winner-category-label">
                  <span className="category-icon">{categoryIcons[category]}</span>
                  <span className="category-name">{category}</span>
                </div>
                <div className="winner-image-compact">
                  <img
                    src={`${import.meta.env.VITE_API_URL}${winner.imageUrl}`}
                    alt={winner.country}
                  />
                </div>
                <div className="winner-info-compact">
                  <div className="winner-location">
                    <MapPin size={14} />
                    <span>{winner.country}</span>
                  </div>
                  <div className="winner-stats">
                    <span className="likes-count">❤️ {winner.likes || 0}</span>
                    <span className="score-badge">
                      {winner.score.toFixed(1)} /day
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {Object.values(winners).every(w => w === null) && (
          <div className="no-winners">
            <p>Upload and like photos to see winners!</p>
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="community-container">
        <div className="community-header">
          <div className="header-pattern"></div>
          <div className="header-content">
            <div className="header-left">
              <Camera className="header-icon" />
              <div>
                <h1 className="header-title">Photo Community</h1>
                <p className="header-subtitle">Share your moments with the world</p>
              </div>
            </div>
            <div className="header-right">
              {currentUser ? (
                <>
                  <div className="user-info">
                    <UserIcon className="user-icon" />
                    <span className="username">{currentUser.username}</span>
                    {currentUser.isAdmin && <span className="admin-badge">Admin</span>}
                  </div>
                  <button className="logout-button" onClick={handleLogout}>
                    <LogOut className="button-icon" />
                    Logout
                  </button>
                </>
              ) : (
                <button className="login-button" onClick={() => navigate('/login')}>
                  <LogIn className="button-icon" />
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="community-content">
          <div className="content-header">
            <h2 className="gallery-title">Community Gallery</h2>
            <button className="upload-button" onClick={handleUploadClick}>
              <Upload className="button-icon" />
              Share Your Photo
            </button>
          </div>
          {/* ← NEW: Two-column layout with sidebar */}
          <div className="community-layout">
                      {/* LEFT: Main Gallery */}
            <div className="main-gallery">
              {photos.length ? (
                <div className="photo-gallery-grid">
                  {photos.map(photo => <PhotoCard key={photo._id} photo={photo} />)}
                </div>
              ) : (
                <div className="empty-gallery">
                  <div className="empty-gallery-icon">📸</div>
                  <h3>No Photos Yet</h3>
                  <p>Be the first to share a photo with the community!</p>
                </div>
              )}
            </div>
            {/* RIGHT: Best Pics Sidebar */}
            <div className="best-pics-sidebar">
              <BestPicsSidebar photos={photos} />
            </div>
          </div>
        </div>
        {/* UploadPhoto Component */}
        {uploadDialogOpen && (
          <UploadPhoto
            onClose={() => { setUploadDialogOpen(false); loadPhotos(); }}
            currentUser={currentUser}
          />
        )}
               {/* Delete Confirmation Dialog */}
        {deleteConfirmOpen && (
          <div className="dialog-overlay" onClick={() => setDeleteConfirmOpen(false)}>
            <div className="dialog-content alert-dialog" onClick={e => e.stopPropagation()}>
              <div className="dialog-header">
                <h2 className="dialog-title">Delete Photo</h2>
              </div>
              <div className="dialog-body">
                <p>Are you sure you want to delete this photo? This action cannot be undone.</p>
              </div>
              <div className="dialog-footer">
                <button className="cancel-button" onClick={() => setDeleteConfirmOpen(false)}>Cancel</button>
                <button className="danger-button" onClick={handleDeletePhoto}>Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}