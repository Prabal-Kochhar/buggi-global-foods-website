import React from 'react';
// No component-specific CSS import needed

function Traction() {
  return (
    <section id="traction" className="traction-section section-padding"> {/* Added id="traction" and global padding */}
      <div className="container">
        <h2 className="section-heading">Our Traction & Growth</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 traction-grid"> {/* Using global grid classes */}
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
