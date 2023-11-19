import storage from 'redux-persist/lib/storage';
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
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { userModel } from '../../entities/user';

import { popupReducer } from './slices/togglePopupSlice.js';
import { restoreReducer } from './slices/restoreSlice';
import { productsReducer } from './slices/productsSlice';
import { favoritesReducer } from './slices/favoritesSlice';
import { errorReducer } from './slices/errorSlice';
import { basketReducer } from './slices/basketSlice';
import { authReducer } from './slices/authSlice';

const rootReducer = combineReducers({
  account: userModel.reducer,
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
