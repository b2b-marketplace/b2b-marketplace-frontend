import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import productsApi from '../../api/productsApi';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (page) => {
  return productsApi.getProducts(page);
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => {
  return productsApi.getProductById(id);
});

const initialState = {
  allProducts: {
    previousDBPage: null,
    nextDBPage: null,
    totalProducts: 0,
    pageDB: 1,
    allProducts: [],
    isFull: false,
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
      if (state.allProducts.nextDBPage !== null) {
        // eslint-disable-next-line no-param-reassign
        state.allProducts.pageDB += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.allProducts.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, actions) => {
        const newProducts = actions.payload.results.filter(
          (product) => product.quantity_in_stock !== 0
        );
        if (state.allProducts.allProducts.length !== state.allProducts.totalProducts) {
          state.allProducts.pageDB === 1
            ? (state.allProducts.allProducts = newProducts)
            : (state.allProducts.allProducts = [...state.allProducts.allProducts, ...newProducts]);
        }

        state.allProducts.allProducts.length === state.allProducts.totalProducts
          ? (state.allProducts.isFull = true)
          : (state.allProducts.isFull = false);

        state.allProducts.previousDBPage = actions.payload.previous;
        state.allProducts.nextDBPage = actions.payload.next;
        state.allProducts.totalProducts = actions.payload.count;
        state.allProducts.status = 'loaded';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.allProducts.status = 'error';
        state.allProducts.allProducts = [];
        state.allProducts.nextDBPage = null;
        state.allProducts.previousDBPage = null;
        state.allProducts.totalProducts = 0;
      });

    builder
      .addCase(fetchProductById.pending, (state) => {
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
