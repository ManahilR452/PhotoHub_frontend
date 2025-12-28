import { useState, useEffect } from 'react';
import { Trophy, Calendar, User, MapPin, Heart } from 'lucide-react';
import { getFeaturedPhoto } from '../api/photoApi';
import './FeaturedPhoto.css';

function FeaturedPhoto() {
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const data = await getFeaturedPhoto();
        setFeatured(data);
      } catch (err) {
        console.error('Failed to load featured photo:', err);
      } finally {
        setLoading(false);
      }
    };
    loadFeatured();
  }, []);

  if (loading) return <div className="featured-loading">Loading featured photo...</div>;
  if (!featured) return null;

  return (
    <div className="featured-photo-section">
      <div className="featured-badge">
        <Trophy className="trophy-icon" />
        <h2>Photo of the Week</h2>
      </div>
      
      <div className="featured-content">
        <div className="featured-image-wrapper">
          <img 
            src={featured.imageUrl.startsWith('http') 
              ? featured.imageUrl 
              : `${import.meta.env.VITE_API_URL}${featured.imageUrl}`
            }
            alt={`Featured photo from ${featured.country}`}
            className="featured-image"
          />
          <div className="featured-overlay">
            <div className="featured-stats">
              <div className="stat">
                <Heart size={20} />
                <span>{featured.likes || 0} likes</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="featured-details">
          <h3 className="featured-title">Outstanding Capture</h3>
          
          <div className="featured-info">
            <div className="info-item">
              <User size={18} />
              <span>By {featured.uploaderName}</span>
            </div>
            <div className="info-item">
              <MapPin size={18} />
              <span>{featured.country}</span>
            </div>
            <div className="info-item">
              <Calendar size={18} />
              <span>{featured.featuredPeriod || 'This Week'}</span>
            </div>
          </div>
          
          <p className="featured-description">
            This stunning photograph has been selected as our featured image 
            for its exceptional composition, lighting, and storytelling.
          </p>
        </div>
      </div>
    </div>
  );
}