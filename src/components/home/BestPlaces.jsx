import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import Card from '../shared/Card'
import './BestPlaces.css'

function BestPlaces() {
  const places = [
    {
      id: 1,
      name: 'Islamabad, Pakistan',
      // Beach cityscape + Arabian Sea
      image: 'images/img 4.jpg',
      description: 'Skyline and coastal views of Karachi city',
      category: 'City'
    },
    {
      id: 2,
      name: 'Beijing, China',
      // Great Wall scenic lookout
      image: 'images/img 5.jpg',
      description: 'Breathtaking views atop the Great Wall',
      category: 'Historic'
    },
    {
      id: 3,
      name: 'Ankara, Turkey',
      // Istanbul skyline, Bosphorus + skyline
      image: 'images/img 6.jpg',
      description: 'Blending East and West across the Bosphorus',
      category: 'Cultural'
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      // Tokyo skyline view at night
      image: 'images/img 7.jpg',
      description: 'Neon cityscape of Tokyo at night',
      category: 'Modern'
    },
    {
      id: 5,
      name: 'Paris, France',
      // Eiffel Tower classic
      image: 'images/img 2.jpg',
      description: 'Iconic Eiffel Tower and Paris ambience',
      category: 'Iconic'
    }
  ]

  return (
    <section id="best-places" className="best-places section">
      <div className="container">
        <h2 className="section-title">Best Places to Explore</h2>
        <p className="section-subtitle">
          Discover the world's most stunning destinations through the eyes of talented photographers
        </p>

        <div className="places-grid">
          {places.map((place) => (
            <Card key={place.id} className="place-card">
              <div className="place-image-wrapper">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="place-image"
                  loading="lazy"
                />
                {/* <div className="place-overlay">
                  <button className="place-view-button">
                    <span>View Gallery</span>
                    <ArrowRight size={16} />
                  </button>
                </div> */}
                <div className="place-category">{place.category}</div>
              </div>
              <div className="place-content">
                <div className="place-location">
                  <MapPin size={16} />
                  <h3 className="place-name">{place.name}</h3>
                </div>
                <p className="place-description">{place.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestPlaces
