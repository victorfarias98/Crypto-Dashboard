import React from 'react';

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Main Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Real-Time Updates</h3>
            <p>Track price changes of major cryptocurrencies in real time.</p>
          </div>
          <div className="feature-item">
            <h3>Variation Analysis</h3>
            <p>View the percentage variation since the dashboard opened and make informed decisions.</p>
          </div>
          <div className="feature-item">
            <h3>Intuitive Interface</h3>
            <p>Enjoy a user-friendly interface, perfect for both beginners and experts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
