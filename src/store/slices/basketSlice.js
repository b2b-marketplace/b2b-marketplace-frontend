import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { basketList } from '../../mock/basketMock';

const initialState = {
  basket: {
    id: '',
    basket_products: [],
  },
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { productIds, quantity } = action.payload;
      state.basket.basket_products.push({ id: productIds, quantity });
    },
    deleteProduct: (state, action) => {
      if (Array.isArray(action.payload.productIds)) {
        state.basket.basket_products = state.basket.basket_products.filter(
          (product) => !action.payload.productIds.includes(product.id)
        );
      } else {
        state.basket.basket_products = state.basket.basket_products.filter((product) => {
          return product.id !== action.payload.productIds;
        });
      }
    },
    changeQuantity: (state, action) => {
      const { productIds, quantity } = action.payload;
      state.basket.basket_products = state.basket.basket_products.map((product) => {
        if (product.id === productIds) {
          return {
            ...product,
            quantity: quantity,
          };
        }
        return product; // Если это не нужный товар, возвращаем без изменений
      });
    },
    changeChecked: (state, action) => {
      const { productIds, checked } = action.payload;
      if (Array.isArray(productIds)) {
        state.basket.basket_products = state.basket.basket_products.map((product) => {
          return {
            ...product,
            checked: checked,
          };
        });
      } else {
        state.basket.basket_products = state.basket.basket_products.map((product) => {
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

export const { addProduct, deleteProduct, changeQuantity, changeChecked } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
