import React from 'react';
import './Products.css'; // Import component-specific CSS

function Products() {
  return (
    <section id="products" className="products-section py-16">
      <div className="container">
        <h2 className="section-heading">Our Products</h2>

        <div className="grid-cols-1 md:grid-cols-2 gap-12">
          {/* Current Product Line */}
          <div className="card product-card">
            <h3 className="card-title">Current Product Line</h3>
            <p className="card-text mb-4">
              We offer a range of <span className="font-semibold">processed & packaged Indian spices</span>,
              meticulously selected and prepared to retain their authentic flavor and aroma.
            </p>
            <ul className="product-list">
              <li><span className="font-semibold">Chilli Powder</span>: Our flagship and most sought-after product.</li>
              <li><span className="font-semibold">Turmeric Powder</span>: Known for its vibrant color and health benefits.</li>
              <li><span className="font-semibold">Cumin Powder</span>: A staple for its distinctive warm and earthy flavor.</li>
              <li>And other essential Indian spices, carefully sourced and packaged.</li>
            </ul>
            <div className="product-image-container">
              <img src="/hotchili.jpg" alt="Mama's Chilli Powder" className="product-image" />
            </div>
          </div>

          {/* Flagship Product & Future Expansion */}
          <div className="card product-card">
            <h3 className="card-title">Flagship Product</h3>
            <p className="card-text mb-6">
              Our pride and joy, <span className="font-semibold accent-text">Mama's Chilli Powder</span>, is a fast-moving
              packaged product specifically tailored for Nigerian consumers. Its unique blend and consistent quality
              have quickly made it a household favorite, gaining significant traction in the market.
            </p>

            <h3 className="card-title">Future Expansion</h3>
            <p className="card-text mb-4">
              We are continuously innovating and planning to expand our product line to meet evolving consumer demands.
              Future additions will include:
            </p>
            <ul className="product-list">
              <li><span className="font-semibold">Blended Spices & Masalas</span>: Convenient and authentic mixes for various dishes.</li>
              <li><span className="font-semibold">Ready-to-Cook Spice Mixes</span>: Customized for African taste profiles, offering ease and flavor.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
