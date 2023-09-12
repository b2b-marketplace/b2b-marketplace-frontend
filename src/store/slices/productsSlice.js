import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsApi from '../../utils/ProductsApi';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  let data = [];
  await productsApi.getProducts().then((res) => {
    data = res.results;
  });
  return data;
});

const initialState = {
  products: {
    items: [],
    status: 'loading',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products.items = [];
      state.products.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, actions) => {
      state.products.items = actions.payload;
      state.products.status = 'loaded';
    },
    [fetchProducts.rejected]: (state) => {
      state.products.status = 'error';
    },
  },
});

export const productsReducer = productsSlice.reducer;
