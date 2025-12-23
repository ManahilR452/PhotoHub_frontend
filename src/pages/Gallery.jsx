import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X, MapPin, Eye, Heart, Filter, Download } from 'lucide-react';
import galleryPhotos, { categories, getCountries } from '../data/galleryData';
import './Gallery.css';

function Gallery() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const countries = ['All', ...getCountries()];

  const filteredPhotos = galleryPhotos.filter(p => {
    if (searchTerm) {
      return p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.country.toLowerCase().includes(searchTerm.toLowerCase());
    }
    const mc = selectedCountry === 'All' || p.country.toLowerCase() === selectedCountry.toLowerCase();
    const mcat = selectedCategory === 'All' || p.category === selectedCategory;
    return mc && mcat;
  });

  const hasActiveFilters = searchTerm || selectedCountry !== 'All' || selectedCategory !== 'All';

  const resetFilters = () => {
    setSelectedCountry('All');
    setSelectedCategory('All');
    setSearchInput('');
    setSearchTerm('');
  };

  const handleCountrySelect = c => {
    setSelectedCountry(c);
    setSearchInput('');
    setSearchTerm('');
  };

  const handleCategorySelect = c => {
    setSelectedCategory(c);
    setSearchInput('');
    setSearchTerm('');
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchTerm(searchInput.trim());
    setSelectedCountry('All');
    setSelectedCategory('All');
  };

  const handleDownload = async (photo, e) => {
    e.stopPropagation();
    
    try {
      // Fetch the image as a blob to handle CORS
      const response = await fetch(photo.image);
      
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Create temporary link and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = `${photo.title.replace(/\s+/g, '-')}-${photo.country}-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('Download successful:', photo.title);
    } catch (error) {
      console.error('Download failed:', error);
      
      // Fallback: try opening in new tab
      try {
        window.open(photo.image, '_blank');
      } catch (fallbackError) {
        alert('Unable to download this image. Please try right-clicking and selecting "Save Image As".');
      }
    }
  };

  return (
    <div className="gallery-page">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="gallery-hero"
      >
        <h1 className="hero-title">Photo Gallery</h1>
        <p className="hero-subtitle">Discover stunning photography from around the world</p>
      </motion.div>

      <div className="gallery-content">
        <aside className="filters-sidebar">
          <div className="sidebar-header">
            <Filter size={20} />
            <h2>Filters</h2>
          </div>

          <div className="filter-section">
            <label className="filter-title">Search</label>
            <form className="search-wrapper" onSubmit={handleSearchSubmit}>
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                placeholder="Search photos..." 
                value={searchInput} 
                onChange={e => setSearchInput(e.target.value)} 
                className="search-input" 
              />
              {searchInput && (
                <button 
                  type="button" 
                  onClick={() => { setSearchInput(''); setSearchTerm(''); }} 
                  className="clear-btn"
                >
                  <X size={16} />
                </button>
              )}
            </form>
          </div>

          <div className="filter-section">
            <label className="filter-title">Country</label>
            <div className="filter-chips">
              {countries.map(c => (
                <button 
                  key={c} 
                  onClick={() => handleCountrySelect(c)} 
                  className={`chip ${selectedCountry === c ? 'active' : ''}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <label className="filter-title">Category</label>
            <div className="filter-chips">
              <button 
                onClick={() => handleCategorySelect('All')} 
                className={`chip ${selectedCategory === 'All' ? 'active' : ''}`}
              >
                All
              </button>
              {categories.map(c => (
                <button 
                  key={c.id} 
                  onClick={() => handleCategorySelect(c.id)} 
                  className={`chip ${selectedCategory === c.id ? 'active' : ''}`} 
                  title={c.description}
                >
                  <span>{c.icon}</span>
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <button onClick={resetFilters} className="reset-button">
              <X size={16} />
              Clear All Filters
            </button>
          )}
        </aside>

        <main className="gallery-main">
          <div className="results-bar">
            <p className="results-text">
              <strong>{filteredPhotos.length}</strong> {filteredPhotos.length === 1 ? 'photo' : 'photos'}
            </p>
          </div>

          {filteredPhotos.length ? (
            <motion.div layout className="photo-grid">
              {filteredPhotos.map((p, i) => (
                <motion.div 
                  key={p.id} 
                  layout 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: i * 0.02, duration: 0.3 }} 
                  className="photo-card" 
                  onClick={() => setSelectedPhoto(p)}
                >
                  <div className="photo-image-wrap">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="photo-img" 
                      loading="lazy" 
                      onError={e => e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'} 
                    />
                    <div className="photo-overlay">
                      <h3 className="overlay-title">{p.title}</h3>
                      <p className="overlay-location">
                        <MapPin size={14} />
                        {p.location}
                      </p>
                    </div>
                  </div>
                  <div className="photo-footer">
                    <span className="country-badge">{p.country}</span>
                    <div className="photo-stats">
                      <span className="stat">
                        <Heart size={14} />
                        {p.likes}
                      </span>
                      <span className="stat">
                        <Eye size={14} />
                        {p.views}
                      </span>
                      <button 
                        className="stat download-btn" 
                        onClick={(e) => handleDownload(p, e)} 
                        title="Download photo"
                      >
                        <Download size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">📷</div>
              <h3>No photos found</h3>
              <p>Try adjusting your search or filters</p>
              {hasActiveFilters && (
                <button onClick={resetFilters} className="reset-button">
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </main>
      </div>

      {selectedPhoto && (
        <div className="modal-backdrop" onClick={() => setSelectedPhoto(null)}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="modal" 
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelectedPhoto(null)} className="modal-close-btn">
              <X size={24} />
            </button>
            <img src={selectedPhoto.image} alt={selectedPhoto.title} className="modal-img" />
            <div className="modal-details">
              <h2 className="modal-title">{selectedPhoto.title}</h2>
              <p className="modal-location">
                <MapPin size={18} />
                {selectedPhoto.location}, {selectedPhoto.country}
              </p>
              <p className="modal-desc">{selectedPhoto.description}</p>
              <div className="modal-stats">
                <span className="modal-stat">
                  <Heart size={18} />
                  {selectedPhoto.likes} likes
                </span>
                <span className="modal-stat">
                  <Eye size={18} />
                  {selectedPhoto.views} views
                </span>
                <button 
                  className="modal-download-btn" 
                  onClick={(e) => handleDownload(selectedPhoto, e)}
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
              <div className="modal-tags">
                <span className="tag">{selectedPhoto.country}</span>
                <span className="tag">
                  {categories.find(c => c.id === selectedPhoto.category)?.name}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Gallery;