import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Crypto Dashboard</h1>
        <p>Monitor and maximize your cryptocurrency investments.</p>
        <Link to="/dashboard" className="cta-button">Explore the Dashboard</Link>
      </div>
    </header>
  );
}
