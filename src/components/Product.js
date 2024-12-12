import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className="product-page">
      <section id="how-it-works" className="section">
        <h2>How it Works</h2>
        <p>Focusmate connects you with a virtual accountability partner for real-time work sessions.</p>
      </section>

      <section id="features" className="section">
        <h2>Features</h2>
        <ul>
          <li>Live coworking sessions</li>
          <li>Calendar integration</li>
          <li>Customizable session durations</li>
        </ul>
      </section>

      <section id="what-can-i-do" className="section">
        <h2>What Can I Do on Focusmate?</h2>
        <p>You can improve productivity, stay focused, and achieve goals faster with a partner.</p>
      </section>

      <section id="science-behind" className="section">
        <h2>The Science Behind Focusmate</h2>
        <p>Studies show that accountability and social presence significantly boost productivity and focus.</p>
      </section>

      <section id="pricing" className="section">
        <h2>Pricing</h2>
        <ul>
          <li><strong>Free Plan:</strong> 3 sessions per week</li>
          <li><strong>Pro Plan:</strong> Unlimited sessions for $5/month</li>
        </ul>
      </section>
    </div>
  );
};

export default Product;
