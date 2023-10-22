import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  favorites: {
    id: '',
    favorites_products: [],
  },
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addDeliveryAddress: (state, action) => {
      const { deliveryAddress } = action.payload;
      state.favorites.delivery_address = deliveryAddress;
    },
    updateDeliveryAddress: (state, action) => {
      const { deliveryAddress } = action.payload;
    },
    updateAllProduct: (state, action) => {
      const { currentProductList } = action.payload;
      state.favorites.favorites_products = currentProductList;
    },
    addProduct: (state, action) => {
      const { productIds, quantity } = action.payload;
      state.favorites.favorites_products.push({ id: productIds, quantity });
    },
    deleteProduct: (state, action) => {
      if (Array.isArray(action.payload.productIds)) {
        state.favorites.favorites_products = state.favorites.favorites_products.filter(
          (product) => !action.payload.productIds.includes(product.id)
        );
      } else {
        state.favorites.favorites_products = state.favorites.favorites_products.filter(
          (product) => {
            return product.id !== action.payload.productIds;
          }
        );
      }
    },
    changeQuantity: (state, action) => {
      const { productIds, quantity } = action.payload;
      state.favorites.favorites_products = state.favorites.favorites_products.map((product) => {
        if (product.id === productIds) {
          return {
            ...product,
            quantity,
          };
        }
        return product; // Если это не нужный товар, возвращаем без изменений
      });
    },
    changeChecked: (state, action) => {
      const { productIds, checked } = action.payload;
      if (Array.isArray(productIds)) {
        state.favorites.favorites_products = state.favorites.favorites_products.map((product) => {
          return {
            ...product,
            checked,
          };
        });
      } else {
        state.favorites.favorites_products = state.favorites.favorites_products.map((product) => {
          if (product.id === productIds) {
            return {
              ...product,
              checked: !product.checked,
            };
          }
          return product; // Если это не нужный товар, возвращаем без изменений
        });
      }
    },
  },
});

export const {
  addDeliveryAddress,
  addProduct,
  deleteProduct,
  updateAllProduct,
  changeQuantity,
  changeChecked,
} = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
