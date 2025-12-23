import React from 'react';
import { Camera, Globe, Users, ShieldCheck, Heart, Zap } from 'lucide-react';
import Card from '../components/shared/Card';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* --- Hero Section --- */}
        <section className="about-hero">
          <h1 className="about-title">
            The Future of <br />
            <span className="vibrant-text">Photography Communities</span>
          </h1>
          <p className="about-lead">
            GlobeSnaps is a dedicated space for photographers to showcase their work, 
            explore global perspectives, and connect through the art of the lens.
          </p>
        </section>

        {/* --- Feature Grid --- */}
        <section className="about-features">
          <div className="feature-grid">
            <div className="feature-item">
              <Globe className="feature-icon" />
              <h3 className="item-title">Global Gallery</h3>
              <p className="item-text">Explore high-quality captures from Pakistan to Japan. Filter by country and see the world differently.</p>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" />
              <h3 className="item-title">Instant Sharing</h3>
              <p className="item-text">Upload your clicks in seconds. Our platform supports high-resolution images for maximum impact.</p>
            </div>
            <div className="feature-item">
              <ShieldCheck className="feature-icon" />
              <h3 className="item-title">Admin Moderated</h3>
              <p className="item-text">A safe, clean environment managed by admins to ensure only the best content inspires our users.</p>
            </div>
          </div>
        </section>

        {/* --- Text Content Section --- */}
        <section className="about-story-simple">
          <div className="story-inner">
            <h2 className="section-heading">Why GlobeSnaps?</h2>
            <p className="main-text">
              Most social platforms prioritize algorithms over art. At **GlobeSnaps**, we prioritize the photographer. Our community gallery is built to categorize your work into **Nature, Sky, and Places**, making it easier for your target audience to find you.
            </p>
            <div className="highlight-quote">
              <Heart className="heart-icon" />
              <p>Empowering every photographer to share their unique view of the world.</p>
            </div>
          </div>
        </section>

        {/* --- Action Cards --- */}
        <section className="how-it-works">
          <div className="card-row">
            <Card className="action-card">
              <Camera className="card-icon" />
              <h4>Upload</h4>
              <p>Share your best shots with our growing community.</p>
            </Card>
            <Card className="action-card">
              <Users className="card-icon" />
              <h4>Connect</h4>
              <p>See what other photographers are capturing worldwide.</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;