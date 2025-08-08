import React from 'react';
import './Traction.css'; // Import component-specific CSS

function Traction() {
  return (
    <section id="traction" className="traction-section py-16">
      <div className="container">
        <h2 className="section-heading">Our Traction & Growth</h2>

        <div className="traction-grid">
          {/* Market Penetration */}
          <div className="card traction-card">
            <div className="traction-icon">📦</div> {/* Box emoji for containers */}
            <h3 className="traction-title">Market Penetration</h3>
            <p className="traction-text">
              We have successfully exported <span className="font-semibold">3 full containers of spices</span> directly from India to Nigeria,
              demonstrating our robust supply chain and market acceptance.
            </p>
          </div>

          {/* On-Ground Presence */}
          <div className="card traction-card">
            <div className="traction-icon">🌍</div> {/* Globe emoji for presence */}
            <h3 className="traction-title">Strong On-Ground Presence</h3>
            <p className="traction-text">
              Our founder is <span className="font-semibold">stationed in Nigeria for over 15 years</span>, ensuring real-time
              market insights, quick decision-making, and strong local relationships.
            </p>
          </div>

          {/* Distributor Relationships */}
          <div className="card traction-card">
            <div className="traction-icon">🤝</div> {/* Handshake emoji for relationships */}
            <h3 className="traction-title">Solid Distributor Relationships</h3>
            <p className="traction-text">
              We have built a <span className="font-semibold">solid distribution foundation in Lagos</span>, with ongoing negotiations
              for regional expansion across Nigeria and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Traction;
