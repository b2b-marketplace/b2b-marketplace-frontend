import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { accountReducer } from './slices/accountSlice';
import { basketReducer } from './slices/basketSlice';
import { productsReducer } from './slices/productsSlice';
import { popupReducer } from './slices/togglePopupSlice.js';
import { authReducer } from './slices/authSlice';
import { restoreReducer } from './slices/restoreSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  basket: basketReducer,
  products: productsReducer,
  popup: popupReducer,
  auth: authReducer,
  restore: restoreReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket', 'auth', 'account'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
