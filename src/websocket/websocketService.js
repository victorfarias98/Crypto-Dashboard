const streams = {
  BTC: 'btcusdt@ticker',
  ETH: 'ethusdt@ticker',
  SOL: 'solusdt@ticker',
  DOGE: 'dogeusdt@ticker',
  XRP: 'xrpusdt@ticker',
  ADA: 'adausdt@ticker',
  DOT: 'dotusdt@ticker',
  LTC: 'ltcusdt@ticker',
  BNB: 'bnbusdt@ticker'
};

const maxRetries = 5;
let retryCount = 0;
let socket;

export function initializeWebSocket(store) {
  function connect() {
    const streamNames = Object.values(streams).join('/');
    socket = new WebSocket(`wss://stream.binance.com:9443/ws/${streamNames}`);

    socket.onopen = () => {
      console.log('WebSocket successfully connected.');
      retryCount = 0;
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      const symbolMapping = {
        BTCUSDT: 'BTC',
        ETHUSDT: 'ETH',
        SOLUSDT: 'SOL',
        DOGEUSDT: 'DOGE',
        XRPUSDT: 'XRP',
        ADAUSDT: 'ADA',
        DOTUSDT: 'DOT',
        LTCUSDT: 'LTC',
        BNBUSDT: 'BNB'
      };

      if (data.stream) {
        const symbolKey = symbolMapping[data.stream.toUpperCase()];
        const price = parseFloat(data.data.c);

        if (symbolKey) {
          store.dispatch({
            type: 'SET_CRYPTO_PRICE',
            payload: {
              symbol: symbolKey,
              price: price
            }
          });
        }
      }
    };

    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log('WebSocket closed cleanly:', event.code, event.reason);
      } else {
        console.error('WebSocket closed unexpectedly.');
        if (retryCount < maxRetries) {
          retryCount++;
          const delay = Math.min(1000 * Math.pow(2, retryCount), 30000);
          console.log(`Retrying to reconnect in ${delay / 1000} seconds...`);
          setTimeout(connect, delay);
        } else {
          console.error('Max retries reached.');
        }
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    const pingInterval = setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        console.log('Sending pong frame.');
        socket.send(JSON.stringify({ pong: 'ping-payload' }));
      }
    }, 3 * 60 * 1000);

    socket.onclose = (event) => {
      clearInterval(pingInterval);
    };
  }

  connect();

  return socket;
}
