import React from 'react'
import { ArrowRight, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background with 5 Country Transitions */}
      <div className="hero-background-wrapper">
        <div className="bg-slide china"></div>
        <div className="bg-slide pakistan"></div>
        <div className="bg-slide turkey"></div>
        <div className="bg-slide japan"></div>
        <div className="bg-slide france"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Camera size={16} />
            <span>Explore the World Through Photography</span>
          </div>
          
          <h1 className="hero-title">
            Discover Stunning Photography From Around The Globe
          </h1>
          
          <p className="hero-description">
            Journey through iconic landmarks, historic sites, prestigious universities, 
            and vibrant cultures captured by talented photographers worldwide.
          </p>
          
          <div className="hero-actions">
             <Link to="/Gallery">
              <Button size="large" icon={<ArrowRight size={20} />}>
                Explore Gallery
              </Button>
            </Link>
            <Link to="/Community">
             <a href="#Community">
              <Button variant="secondary" size="large">
                View  Community
              </Button>
            </a>
            </Link>
           
           
          </div>
        </div>
      </div>
{/* Persistent Motivational Quote Runner */}
<div className="hero-quote-container">
  <div className="quote-track">
    {/* Original quotes */}
    <span>"Photography is the beauty of life, captured."</span>
    <span>"Every picture tells a story that words cannot express."</span>
    <span>"The earth is art, the photographer is only a witness."</span>

    {/* Duplicate quotes for seamless scrolling */}
    <span>"Photography is the beauty of life, captured."</span>
    <span>"Every picture tells a story that words cannot express."</span>
    <span>"The earth is art, the photographer is only a witness."</span>
  </div>
</div>


      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default HeroSection