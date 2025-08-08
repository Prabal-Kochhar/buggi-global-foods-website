import React, { useState } from 'react';
import './Contact.css'; // Import component-specific CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // In a real application, you would send this data to a backend server.
    // For this static site, we'll simulate sending and then clear the form.
    // All emails should go to pkvkintegrated@gmail.com
    const mailtoLink = `mailto:pkvkintegrated@gmail.com?subject=Website Inquiry from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    setStatus('Message sent! Please check your email client.');
    setFormData({ name: '', email: '', message: '' }); // Clear form after "sending"
    setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
  };

  return (
    <section id="contact" className="contact-section py-16">
      <div className="container contact-container">
        <h2 className="section-heading">Get in Touch</h2>

        <div className="contact-card card">
          <p className="contact-intro-text mb-8">
            We'd love to hear from you! Whether you have an inquiry, feedback, or want to discuss a partnership,
            feel free to reach out.
          </p>

          <div className="contact-info-grid mb-12">
            <div className="text-center">
              <h3 className="contact-info-title">Email Us</h3>
              <a href="mailto:pkvkintegrated@gmail.com" className="contact-link">
                pkvkintegrated@gmail.com
              </a>
            </div>
            <div className="text-center">
              <h3 className="contact-info-title">Call Us</h3>
              <a href="tel:+23470786815150" className="contact-link">
                +234 70786815150
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="form-input"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary form-submit-btn"
            >
              Send Message
            </button>
            {status && <p className="form-status-message">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
