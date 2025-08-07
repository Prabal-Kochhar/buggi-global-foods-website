import { useState, useEffect } from 'react';
import './styles/index.css';

// We import the images directly into the component for better bundling.
import logo from './logo.png';
import hotChili from './hotchili.jpg';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // State for the contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    // Simulate an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data submitted:', formData);
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Form submission failed:', error);
      setFormStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
          <div className="logo-section">
            {/* The logo is now a standalone image without a border or background */}
            <img src={logo} alt="Buggi Global Foods Ltd. Logo" className="logo-image" />
            <h1 className="company-name">Buggi Global Foods Ltd.</h1>
          </div>
          <button
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
          <nav className={`nav-links ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">About Us</a></li>
              <li><a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">Our Products</a></li>
              <li><a href="#advantage" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">Our Advantage</a></li>
              <li><a href="#traction" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">Traction</a></li>
              <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-content animate-fade-in-up">
            <h2 className="hero-title">
              Bridging Cultures with Authentic Indian Spices
            </h2>
            <p className="hero-subtitle">
              Buggi Global Foods Ltd. is your trusted partner in exporting premium, high-quality spices to markets around the world, with a strong focus on Africa.
            </p>
            <a href="#products" className="btn btn-primary">
              Explore Our Spices
            </a>
          </div>
        </section>
        
        {/* About Us Section */}
        <section id="about" className="section-padding about-section">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="section-heading">About Buggi Global Foods</h3>
              <p className="subtitle">
                We are pioneers in the processing, packaging, and distribution of premium Indian spices, with a vision to create a strong global brand presence.
              </p>
            </div>
            <div className="about-grid">
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  Our core business is to bring the authentic flavors of India to the global stage, starting with Nigeria and other African countries. With over 15 years of on-ground experience, our founder possesses a deep understanding of local market dynamics and consumer needs.
                </p>
                <p className="text-lg leading-relaxed">
                  Our mission is to expand the reach of our spices across Africa, gradually moving into other untapped markets and establishing ourselves as a leading exporter of genuine, high-quality Indian spices.
                </p>
              </div>
              <div className="vision-card transform-hover">
                <h4 className="vision-title">Our Vision</h4>
                <p className="vision-text">
                  "To become a pioneer in Indian spices exports, creating a strong global brand presence, especially in African markets."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clear section separator */}
        <hr className="section-divider" />

        {/* Products Section */}
        <section id="products" className="section-padding products-section">
          <div className="container">
            <h3 className="section-heading animate-fade-in">Our Products & Services</h3>
            <div className="products-grid">
              <div className="products-list-container animate-slide-in-left">
                <div className="card hover-animate">
                  <h4 className="card-title">Current Product Line</h4>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                    <li>Processed & Packaged Indian Spices: Chilli Powder, Turmeric, Cumin, and other essential spices.</li>
                    <li>Flagship Product: Mama's Chilli Powder, a fast-moving item tailored for Nigerian consumers.</li>
                  </ul>
                </div>
                <div className="card hover-animate mt-6">
                  <h4 className="card-title">Future Expansion</h4>
                  <p className="text-lg text-gray-700">
                    We plan to expand our product line to include blended spices, masalas, and ready-to-cook spice mixes customized for diverse African taste profiles.
                  </p>
                </div>
              </div>
              {/* hotchili.jpg is now the product image */}
              <div className="product-image-container animate-slide-in-right">
                <img
                  src={hotChili}
                  alt="A hot chili pepper"
                  className="product-image hover-animate"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clear section separator */}
        <hr className="section-divider" />

        {/* Our Advantage Section */}
        <section id="advantage" className="section-padding advantage-section">
          <div className="container text-center">
            <h3 className="section-heading animate-fade-in">Our Competitive Advantage</h3>
            <div className="advantage-grid">
              <div className="advantage-card transform-hover">
                <div className="icon">⭐</div>
                <h4 className="advantage-title">Direct from Manufacturer</h4>
                <p className="advantage-text">
                  We bypass intermediaries, ensuring cost-efficiency and direct access to high-quality Indian spices.
                </p>
              </div>
              <div className="advantage-card transform-hover">
                <div className="icon">🎨</div>
                <h4 className="advantage-title">Specialized Branding</h4>
                <p className="advantage-text">
                  Our products feature specialized branding and are market-tailored for Nigerian and other African consumers.
                </p>
              </div>
              <div className="advantage-card transform-hover">
                <div className="icon">🌍</div>
                <h4 className="advantage-title">Addressing Market Gaps</h4>
                <p className="advantage-text">
                  We are filling the growing demand for authentic Indian spices where organized players with direct access are lacking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clear section separator */}
        <hr className="section-divider" />

        {/* Traction Section */}
        <section id="traction" className="section-padding traction-section">
          <div className="container text-center">
            <h3 className="section-heading animate-fade-in">Our Traction</h3>
            <div className="traction-grid">
              <div className="traction-card transform-hover">
                <div className="icon">📦</div>
                <h4 className="traction-title">Export Success</h4>
                <p className="traction-text">
                  Exported 3 full containers of spices directly from India to Nigeria.
                </p>
              </div>
              <div className="traction-card transform-hover">
                <div className="icon">🤝</div>
                <h4 className="traction-title">Distribution Network</h4>
                <p className="traction-text">
                  Established a solid distribution foundation in Lagos, with ongoing negotiations for regional expansion.
                </p>
              </div>
              <div className="traction-card transform-hover">
                <div className="icon">🗺️</div>
                <h4 className="traction-title">On-Ground Leadership</h4>
                <p className="traction-text">
                  Founder stationed in Nigeria to provide real-time market insights and quick decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clear section separator */}
        <hr className="section-divider" />

        {/* Contact Section */}
        <section id="contact" className="section-padding contact-section">
          <div className="container contact-container">
            <h3 className="section-heading animate-fade-in">Get in Touch</h3>
            <p className="contact-subtitle">
              We're ready to partner with you. Let's discuss how we can bring the finest spices to your market.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-input"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-submit"
              >
                Send Message
              </button>
              {formStatus && <p className="form-status-message">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container footer-content">
          <nav className="footer-nav">
            <a href="#about" className="footer-link">About Us</a>
            <a href="#products" className="footer-link">Products</a>
            <a href="#advantage" className="footer-link">Our Advantage</a>
            <a href="#contact" className="footer-link">Contact</a>
          </nav>
          <p className="copyright-text">© 2024 Buggi Global Foods Ltd. All rights reserved.</p>
          <p className="contact-info-text">
            <a href="mailto:pkvkintegrated@gmail.com" className="footer-link-email">pkvkintegrated@gmail.com</a> | +234 70786815150
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
