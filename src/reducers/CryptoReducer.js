// reducers/cryptoReducer.js

const initialState = {
  prices: {
    BTC: 0,
    ETH: 0,
    SOL: 0,
    DOGE: 0,
    XRP: 0,
    ADA: 0,
    DOT: 0,
    LTC: 0,
    BNB: 0
  }
};

export default function cryptoReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CRYPTO_PRICE':
      if (!action.payload || !action.payload.symbol || action.payload.price === undefined) {
        console.error('Invalid SET_CRYPTO_PRICE action payload:', action.payload);
        return state;
      }

      return {
        ...state,
        prices: {
          ...state.prices,
          [action.payload.symbol]: action.payload.price
        }
      };

    default:
      return state;
  }
}
