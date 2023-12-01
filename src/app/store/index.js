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

import { basketModel } from '../../entities/basket';
import { productModel } from '../../entities/product';
import { userModel } from '../../entities/user';

import { authReducer } from './slices/authSlice';
import { errorReducer } from './slices/errorSlice';
import { restoreReducer } from './slices/restoreSlice';
import { popupReducer } from './slices/togglePopupSlice.js';

const rootReducer = combineReducers({
  user: userModel.reducer,
  basket: basketModel.basketReducer,
  products: productModel.reducer,
  popup: popupReducer,
  auth: authReducer,
  restore: restoreReducer,
  error: errorReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket', 'auth', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([]),
});

export const persistor = persistStore(store);
export default store;
