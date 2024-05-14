import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatUSD } from '../helpers/formatCurrency';
import '../styles/dashboard.css';

export default function CryptoDashboard() {
  const prices = useSelector((state) => state.crypto.prices);
  const [percentageChanges, setPercentageChanges] = useState({});
  const [priceDirections, setPriceDirections] = useState({});
  const initialPricesRef = useRef({});

  const saveInitialPrices = (prices) => {
    localStorage.setItem('initialPrices', JSON.stringify(prices));
  };

  const loadInitialPrices = () => {
    const storedPrices = localStorage.getItem('initialPrices');
    return storedPrices ? JSON.parse(storedPrices) : {};
  };

  useEffect(() => {
    const storedInitialPrices = loadInitialPrices();
    if (Object.keys(storedInitialPrices).length === 0 && Object.keys(prices).length > 0) {
      initialPricesRef.current = { ...prices };
      saveInitialPrices(prices);
    } else if (Object.keys(storedInitialPrices).length > 0) {
      initialPricesRef.current = { ...storedInitialPrices };
    }

    if (Object.keys(initialPricesRef.current).length) {
      const newPercentageChanges = {};
      const newPriceDirections = {};

      for (const coin in prices) {
        const initialPrice = initialPricesRef.current[coin];
        const currentPrice = prices[coin];

        if (initialPrice && currentPrice > 0) {
          const percentageChange = ((currentPrice - initialPrice) / initialPrice) * 100;
          newPercentageChanges[coin] = percentageChange.toFixed(2);
          newPriceDirections[coin] = currentPrice > initialPrice ? 'up' : (currentPrice < initialPrice ? 'down' : null);
        } else {
          newPercentageChanges[coin] = 0;
          newPriceDirections[coin] = null;
        }
      }

      setPercentageChanges(newPercentageChanges);
      setPriceDirections(newPriceDirections);
    }
  }, [prices]);

  const renderDirectionIcon = (direction) => {
    if (direction === 'up') return '⬆️';
    if (direction === 'down') return '⬇️';
    return '';
  };

  const renderCryptoCard = (coin, name) => (
    <div className="crypto-card" key={coin}>
      <h2>{name}</h2>
      <p>{formatUSD(prices[coin])} {renderDirectionIcon(priceDirections[coin])}</p>
      <p>Price Variation: {percentageChanges[coin]}%</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Crypto Dashboard</h1>
        <div className="dashboard-buttons">
          <Link to="/" className="back-to-landing-page-button">back</Link>
        </div>
      </div>
      <div className="crypto-cards-container">
        {renderCryptoCard('BTC', 'Bitcoin (BTC)')}
        {renderCryptoCard('ETH', 'Ethereum (ETH)')}
        {renderCryptoCard('SOL', 'Solana (SOL)')}
        {renderCryptoCard('DOGE', 'Dogecoin (DOGE)')}
        {renderCryptoCard('XRP', 'Ripple (XRP)')}
        {renderCryptoCard('ADA', 'Cardano (ADA)')}
        {renderCryptoCard('DOT', 'Polkadot (DOT)')}
        {renderCryptoCard('LTC', 'Litecoin (LTC)')}
        {renderCryptoCard('BNB', 'Binance Coin (BNB)')}
      </div>
    </div>
  );
}
