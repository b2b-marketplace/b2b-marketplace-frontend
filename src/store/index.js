import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from "./slices/accountSlice";
import { basketReducer } from "./slices/basketSlice";


const store = configureStore({
  reducer: {
    account: accountReducer,
    basket: basketReducer,
  },
});
export default store;
