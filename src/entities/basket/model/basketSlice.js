import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { useGetUser } from '../../user/model/userSlice';

const initialState = {
  basket: {
    id: '',
    basket_products: [],
  },
};

//Слайлсы
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addDeliveryAddress: (state, action) => {
      const { deliveryAddress } = action.payload;
      state.basket.delivery_address = deliveryAddress;
    },

    updateDeliveryAddress: (state, action) => {
      const { deliveryAddress } = action.payload;
    },

    updateAllProduct: (state, action) => {
      const { currentProductList: productsList } = action.payload;
      state.basket.basket_products = productsList;
    },

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
            quantity,
          };
        }
        return product;
      });
    },

    changeChecked: (state, action) => {
      const { productId, checked } = action.payload;
      state.basket.basket_products = state.basket.basket_products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            checked: !product.checked,
          };
        }
        return product;
      });
    },

    changeCheckedAll: (state, action) => {
      const { productIds, checked } = action.payload;
      state.basket.basket_products = state.basket.basket_products.map((product) => ({
        ...product,
        checked: productIds.includes(product.id) ? checked : product.checked || false,
      }));
    },
  },
});

//Селекторы
export const useGetBasketItems = () => useSelector((state) => state.basket.basket);
export const useGetBasketItem = (productId) =>
  useSelector(
    (state) =>
      state.basket.basket.basket_products.length &&
      state.basket.basket.basket_products.find((item) => item.id === productId)
  );

export const {
  addDeliveryAddress,
  addProduct,
  deleteProduct,
  updateAllProduct,
  changeQuantity,
  changeChecked,
  changeCheckedAll,
} = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
