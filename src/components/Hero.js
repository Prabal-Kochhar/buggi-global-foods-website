import React from 'react';
// No component-specific CSS import needed

function Hero({ navigateTo }) {
  return (
    <section id="home" className="hero-section"> {/* Added id="home" */}
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
