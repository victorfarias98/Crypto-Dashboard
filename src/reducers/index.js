import { combineReducers } from '@reduxjs/toolkit';
import cryptoReducer from './CryptoReducer';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

export default rootReducer;
