import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Access Now</h2>
        <p>Invest with confidence and maximize your cryptocurrency portfolio with the Crypto Dashboard.</p>
        <Link to="/dashboard" className="cta-button">Explore the Dashboard</Link>
      </div>
    </section>
  );
}
