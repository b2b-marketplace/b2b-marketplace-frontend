import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from "./slices/accountSlice";
import { basketReducer } from "./slices/basketSlice";
import { popupReducer } from './slices/togglePopupSlice.js';


const store = configureStore({
  reducer: {
    account: accountReducer,
    basket: basketReducer,
    popup: popupReducer,
  },
});
export default store;
