import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsApi from '../../utils/ProductsApi';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (page) => {
  return await productsApi.getProducts(page);
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => {
  return await productsApi.getProductById(id);
});

const initialState = {
  allProducts: {
    previousDBPage: null,
    nextDBPage: null,
    totalProducts: 0,
    pageDB: 1,
    allProducts: [],
    status: 'loading',
  },
  productById: {
    product: {},
    status: 'loading',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadMoreProducts: (state) => {
      if (state.allProducts.nextDBPage !== null) state.allProducts.pageDB += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.allProducts.allProducts = [];
        state.allProducts.next = '';
        state.allProducts.previous = '';
        state.allProducts.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, actions) => {
        state.allProducts.allProducts = actions.payload.results;
        state.allProducts.previous = actions.payload.previous;
        state.allProducts.next = actions.payload.next;
        state.allProducts.totalProducts = actions.payload.count;
        state.allProducts.status = 'loaded';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.allProducts.status = 'error';
        state.allProducts.allProducts = [];
        state.allProducts.next = '';
        state.allProducts.previous = '';
        state.allProducts.totalProducts = 0;
      });

    builder
      .addCase(fetchProductById.pending, (state) => {
        state.productById.product = {};
        state.productById.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, actions) => {
        state.productById.product = actions.payload.results[0];
        state.productById.status = 'loaded';
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.productById.status = 'error';
        state.productById.product = {};
      });
  },
});

export const { loadMoreProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
