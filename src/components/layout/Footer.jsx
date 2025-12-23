import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="photo-footer">
      <div className="photo-footer-container">
        
        <div className="photo-footer-section photo-footer-brand-section">
          <h3 className="photo-footer-brand">📸 Photography Explorer</h3>
          <p className="photo-footer-description">
            Discover the world's most stunning destinations through the lens of passionate photographers.
          </p>
          <div className="photo-footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="photo-social-link photo-instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="photo-social-link photo-facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="photo-social-link photo-twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="photo-social-link photo-pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>

        <div className="photo-footer-section">
          <h4 className="photo-footer-heading">Explore</h4>
          <ul className="photo-footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="photo-footer-section">
          <h4 className="photo-footer-heading">Get In Touch</h4>
          <ul className="photo-footer-contact">
            <li>
              <span className="photo-contact-icon">📧</span>
              <a href="mailto:info@photoexplorer.com">info@photoexplorer.com</a>
            </li>
            <li>
              <span className="photo-contact-icon">🌍</span>
              <span>Global Community</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="photo-footer-bottom">
        <div className="photo-footer-bottom-container">
          <p>&copy; {currentYear} Photography Explorer. All rights reserved.</p>
          <div className="photo-footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="photo-separator">|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;