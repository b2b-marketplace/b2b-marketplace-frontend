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
import { authReducer } from './slices/authSlice';
import { basketReducer } from './slices/basketSlice';
import { errorReducer } from './slices/errorSlice';
import { favoritesReducer } from './slices/favoritesSlice';
import { productsReducer } from './slices/productsSlice';
import { restoreReducer } from './slices/restoreSlice';
import { popupReducer } from './slices/togglePopupSlice.js';

const rootReducer = combineReducers({
  account: accountReducer,
  basket: basketReducer,
  products: productsReducer,
  popup: popupReducer,
  auth: authReducer,
  restore: restoreReducer,
  error: errorReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket', 'auth', 'account', 'favorites'],
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
