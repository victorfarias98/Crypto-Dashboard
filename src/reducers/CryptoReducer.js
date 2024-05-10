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
  },
  percentageChange: {
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
      return {
        ...state,
        prices: {
          ...state.prices,
          [action.payload.symbol]: action.payload.price
        }
      };
    case 'SET_PERCENTAGE_CHANGE':
      return {
        ...state,
        percentageChange: {
          ...state.percentageChange,
          [action.payload.symbol]: action.payload.change
        }
      };
    default:
      return state;
  }
}
