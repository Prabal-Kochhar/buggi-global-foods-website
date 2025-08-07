import React from 'react';
// All styles are now handled by the global index.css file

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-nav-links">
          {/* Navigation links in the footer, linking to sections of the page */}
          <a href="#about" className="footer-link">About Us</a>
          <a href="#products" className="footer-link">Products</a>
          <a href="#contact" className="footer-link">Contact Us</a>
        </div>
        {/* Copyright information */}
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Buggi Global Foods Ltd. All rights reserved.
        </p>
        {/* Contact email and phone number */}
        <p className="footer-contact-info">
          Email: <a href="mailto:pkvkintegrated@gmail.com" className="footer-link-underline">pkvkintegrated@gmail.com</a> | Phone: +234 70786815150
        </p>
      </div>
    </footer>
  );
}

export default Footer;
