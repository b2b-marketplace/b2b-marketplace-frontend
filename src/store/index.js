import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { accountReducer } from "./slices/accountSlice";
import { basketReducer } from "./slices/basketSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  basket: basketReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

export const persister = persistStore(store);
export default store;
