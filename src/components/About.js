import React from 'react';
// No component-specific CSS import needed

function About() {
  return (
    <section id="about" className="about-section section-padding"> {/* Added id="about" and global padding */}
      <div className="container">
        <h2 className="section-heading">About Us</h2>

        {/* Company Overview */}
        <div className="card mb-12">
          <h3 className="card-title">Company Overview</h3>
          <p className="card-text mb-4">
            <span className="font-semibold">Buggi Global Foods Ltd.</span> specializes in processing, packaging, and
            distribution of premium Indian spices, targeting local markets and exports, with a primary focus on
            Nigeria and other African countries.
          </p>
          <p className="card-text">
            We are currently operating with our own capital and actively expanding our distribution channels,
            with the ambition to become a leading exporter of authentic Indian spices.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid gap-8 mb-12 grid-cols-1 md:grid-cols-2 about-grid"> {/* Using global grid classes */}
          {/* Vision Card */}
          <div className="card">
            <h3 className="card-title">Our Vision</h3>
            <p className="card-text">
              To become a <span className="font-semibold">pioneer in Indian spices exports</span>, creating a strong
              global brand presence, especially in African markets, and setting new benchmarks for quality and accessibility.
            </p>
          </div>
          {/* Mission Card */}
          <div className="card">
            <h3 className="card-title">Our Mission</h3>
            <p className="card-text">
              To <span className="font-semibold">expand the reach of authentic Indian spices</span> to most African
              countries, starting with Nigeria and gradually expanding to other untapped markets, ensuring every kitchen
              can experience true Indian flavors.
            </p>
          </div>
        </div>

        {/* Founder Expertise */}
        <div className="card">
          <h3 className="card-title">Founder Expertise</h3>
          <p className="card-text">
            Our founder's presence in Nigeria for <span className="font-semibold">over 15 years</span> provides us with deep
            market understanding and invaluable operational expertise, enabling real-time market insights and quick decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
