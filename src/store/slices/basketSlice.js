import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { basketList } from "../../mock/basketMock";
import { isArray } from "@craco/craco/dist/lib/utils";

const initialState = {
  basket: basketList,
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
      if (isArray(action.payload.productIds)) {
        state.basket.basket_products = state.basket.basket_products.filter(product => !action.payload.productIds.includes(product.id));
      } else {
        state.basket.basket_products = state.basket.basket_products.filter((product) => {
          return product.id !== action.payload.productIds;
        });
      }
    },
    changeQuantity: (state, action) => {
      const { productIds, quantity } = action.payload;
      state.basket.basket_products = state.basket.basket_products.map(product => {
        if (product.id === productIds) {
          return {
            ...product,
            quantity: quantity
          };
        }
        return product; // Если это не нужный товар, возвращаем без изменений
      });
    },
  },
});

export const { addProduct, deleteProduct, changeQuantity } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
