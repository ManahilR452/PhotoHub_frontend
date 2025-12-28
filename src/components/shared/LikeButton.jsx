import { useState } from 'react';
import { Heart } from 'lucide-react';

function LikeButton({ photoId, initialLikes, onLikeSuccess }) {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    if (isLiked || isLoading) return;
    
    setIsLoading(true);
    
    try {
      // Get or create unique user ID (stored in localStorage)
      let userId = localStorage.getItem('userId');
      if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('userId', userId);
      }
      
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/photos/${photoId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setLikes(data.likes);
        setIsLiked(true);
        if (onLikeSuccess) onLikeSuccess(data.likes);
      } else {
        console.error(data.message);
      }
      
    } catch (error) {
      console.error('Failed to like photo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleLike}
      disabled={isLiked || isLoading}
      className={`like-button ${isLiked ? 'liked' : ''}`}
    >
      <Heart 
        className={`heart-icon ${isLiked ? 'filled' : ''}`}
        fill={isLiked ? '#ef4444' : 'none'}
      />
      <span>{likes}</span>
    </button>
  );
}

export default LikeButton;