import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './slices/accountSlice';
import { basketReducer } from './slices/basketSlice';
import { productsReducer } from './slices/productsSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    basket: basketReducer,
    products: productsReducer,
  },
});
export default store;
