import React from 'react';
// No component-specific CSS import needed

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us-section section-padding"> {/* Added id="why-choose-us" and global padding */}
      <div className="container">
        <h2 className="section-heading">Why Choose Us?</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 why-choose-us-grid"> {/* Using global grid classes */}
          {/* Problem Statement */}
          <div className="card">
            <h3 className="card-title">The Problem We Solve</h3>
            <p className="card-text mb-4">
              There's a <span className="font-semibold">growing demand for authentic Indian spices in Nigeria</span>,
              but a significant lack of organized players with direct manufacturer access.
            </p>
            <p className="card-text">
              Existing market gaps include issues in quality control, inconsistent direct manufacturer sourcing,
              and inefficient distribution channels, leading to variable product quality and higher costs for consumers.
            </p>
          </div>

          {/* Our Solution */}
          <div className="card">
            <h3 className="card-title">Our Solution</h3>
            <ul className="solution-list">
              <li>
                <span className="font-semibold">Direct Sourcing:</span> We source directly from Indian manufacturers,
                ensuring unparalleled quality and cost efficiency by cutting out intermediaries.
              </li>
              <li>
                <span className="font-semibold">Localized Distribution:</span> We leverage established retail and
                wholesale networks in Nigeria for efficient and widespread distribution.
              </li>
              <li>
                <span className="font-semibold">Technology Adoption:</span> We are open to integrating digital platforms
                and apps to optimize business operations and enhance customer experience.
              </li>
            </ul>
          </div>

          {/* Unique Selling Proposition */}
          <div className="card">
            <h3 className="card-title">Our Unique Edge (USP)</h3>
            <ul className="solution-list">
              <li>
                <span className="font-semibold">Specialty Products:</span> Our premium Chilli Powder, especially
                <span className="font-semibold text-accent"> Mama's Chilli Powder</span>, is registered and rapidly
                gaining traction in the Nigerian market for its authentic taste.
              </li>
              <li>
                <span className="font-semibold">Established Market Access:</span> We have an existing strong footprint
                in Lagos, with a clear expansion strategy to reach more regions.
              </li>
              <li>
                <span className="font-semibold">Competitive Advantage:</span> We offer competitive pricing combined
                with assured quality, thanks to our direct manufacturer sourcing model.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
