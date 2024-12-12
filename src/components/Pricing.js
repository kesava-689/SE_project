import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-section">
      <h1 className="pricing-title">Pricing</h1>
      <p className="pricing-description">Simple pricing to help you focus on what matters.</p>

      <div className="pricing-cards">
        {/* Free Plan */}
        <div className="pricing-card">
          <h2>Free</h2>
          <p className="pricing-feature">3 sessions per week</p>
          <p className="pricing-price">Free forever</p>
          <button className="pricing-button">Sign up</button>
          <p className="pricing-note">No credit card required.</p>
        </div>

        {/* Plus Plan */}
        <div className="pricing-card highlight">
          <h2>Plus</h2>
          <p className="pricing-feature">Unlimited sessions</p>
          <p className="pricing-price">$6.99/mo. billed yearly</p>
          <p className="pricing-price-alt">or $9.99/mo. billed monthly</p>
          <button className="pricing-button">Join for free</button>
          <p className="pricing-note">Start free. Upgrade anytime.</p>
        </div>

        {/* Business Plan */}
        <div className="pricing-card">
          <h2>Business</h2>
          <p className="pricing-feature">For enterprises, small businesses, learning communities, and more</p>
          <button className="pricing-button learn-more">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
