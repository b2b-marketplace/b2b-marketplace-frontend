import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from "./slices/accountSlice";


const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});
export default store;
