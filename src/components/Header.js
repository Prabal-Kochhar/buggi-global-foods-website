import React, { useState } from 'react';
// No component-specific CSS import needed, all styles are in index.css

function Header({ navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        {/* Logo and Company Name */}
        <div className="logo-section">
          <img src="/logo.png" alt="Buggi Global Foods Logo" className="logo-image" />
          <span className="company-name">Buggi Global Foods Ltd.</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-toggle"
        >
          <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <nav className={`nav-links ${isOpen ? 'nav-open' : 'nav-closed'}`}>
          <ul>
            {/* Using <a> tags with href for smooth scrolling to section IDs */}
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="#products" onClick={() => setIsOpen(false)}>Products</a></li>
            <li><a href="#why-choose-us" onClick={() => setIsOpen(false)}>Why Choose Us</a></li>
            <li><a href="#traction" onClick={() => setIsOpen(false)}>Traction</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
