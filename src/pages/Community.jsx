// Community.jsx
import { useState, useEffect } from 'react';
import { Camera, LogOut, LogIn, MapPin, Tag, User as UserIcon, Calendar, Trash2, Upload } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UploadPhoto from './UploadPhoto';
import './Community.css';

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
      const res = await axios.get('http://localhost:5000/api/photos');
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
      await axios.delete(`http://localhost:5000/api/photos/${photoToDelete}`);
      toast.success("Photo deleted successfully");
      setDeleteConfirmOpen(false);
      setPhotoToDelete(null);
      loadPhotos(); // Refresh gallery
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

  const PhotoCard = ({ photo }) => {
    const canDelete = currentUser && (currentUser.id === photo.uploadedBy || currentUser.isAdmin);

    return (
      <div className="photo-card">
        <div className="photo-card-image">
          <img
            src={`http://localhost:5000${photo.imageUrl}`} // Serve image from backend
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
