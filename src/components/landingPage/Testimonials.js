import React from 'react';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <p>"The Crypto Dashboard helped me identify the best times to trade Bitcoin. Clean interface and accurate data!"</p>
            <span>– John Silva, Investor</span>
          </div>
          <div className="testimonial-item">
            <p>"I can't imagine investing in cryptocurrencies without it. Fast updates and clear analysis have helped me grow my investments."</p>
            <span>– Mary Oliveira, Day Trader</span>
          </div>
        </div>
      </div>
    </section>
  );
}
