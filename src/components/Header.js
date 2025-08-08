import React, { useState } from 'react';
import './Header.css'; // Import component-specific CSS

function Header({ navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header"> {/* Apply header-specific class */}
      <div className="container header-content"> {/* Use global container and header-specific content class */}
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
            <li><button onClick={() => { navigateTo('home'); setIsOpen(false); }}>Home</button></li>
            <li><button onClick={() => { navigateTo('about'); setIsOpen(false); }}>About Us</button></li>
            <li><button onClick={() => { navigateTo('products'); setIsOpen(false); }}>Products</button></li>
            <li><button onClick={() => { navigateTo('why-choose-us'); setIsOpen(false); }}>Why Choose Us</button></li>
            <li><button onClick={() => { navigateTo('traction'); setIsOpen(false); }}>Traction</button></li>
            <li><button onClick={() => { navigateTo('contact'); setIsOpen(false); }}>Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
