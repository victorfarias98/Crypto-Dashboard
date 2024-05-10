import React from 'react';

const coinsData = [
  { symbol: 'BTC', name: 'Bitcoin', description: 'Bitcoin is a decentralized digital currency without a central bank or single administrator.' },
  { symbol: 'ETH', name: 'Ethereum', description: 'Ethereum is an open-source blockchain system that allows developers to build decentralized applications.' },
  { symbol: 'SOL', name: 'Solana', description: 'Solana is a high-performance blockchain supporting large-scale decentralized applications.' },
  { symbol: 'DOGE', name: 'Dogecoin', description: 'Dogecoin is a peer-to-peer cryptocurrency featuring the likeness of the Shiba Inu dog from the "Doge" meme.' },
  { symbol: 'XRP', name: 'Ripple', description: 'Ripple is both a platform and a cryptocurrency designed for seamless global payments.' },
  { symbol: 'ADA', name: 'Cardano', description: 'Cardano is a blockchain platform that aims to provide a more balanced and sustainable ecosystem.' },
  { symbol: 'DOT', name: 'Polkadot', description: 'Polkadot is a network protocol that allows arbitrary data to be transferred across blockchains.' },
  { symbol: 'LTC', name: 'Litecoin', description: 'Litecoin is a peer-to-peer cryptocurrency that aims to improve upon Bitcoin.' },
  { symbol: 'BNB', name: 'Binance Coin', description: 'Binance Coin is a cryptocurrency used to pay fees on the Binance cryptocurrency exchange.' },
];

export default function CoinsInfo() {
  return (
    <section className="coins-info-section">
      <h2>Cryptocurrencies We Monitor</h2>
      <div className="coins-grid">
        {coinsData.map(({ symbol, name, description }) => (
          <div key={symbol} className="coin-card">
            <h3>{name} ({symbol})</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
