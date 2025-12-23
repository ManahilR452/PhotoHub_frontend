import React from 'react'
import HeroSection from '../components/home/HeroSection'
import BestPlaces from '../components/home/BestPlaces'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="best-places">
        <BestPlaces />
      </section>
    </div>
  )
}

export default Home
