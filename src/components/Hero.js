import React from 'react';
import './Hero.css'; // Import component-specific CSS

function Hero({ navigateTo }) {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Bringing the Authentic Taste of India to Africa</h1>
        <p className="hero-subtitle">Premium Indian Spices, Processed, Packaged & Exported with Quality and Care.</p>
        <button
          onClick={() => navigateTo('products')}
          className="btn-primary" // Using a global button class
        >
          Explore Our Products
        </button>
      </div>
    </section>
  );
}

export default Hero;
