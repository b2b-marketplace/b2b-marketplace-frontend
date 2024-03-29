import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { AppApi } from '../../../shared/api';

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
  loading: false,
  error: null,
};

const fetchProducts = createAsyncThunk('products/fetchProducts', async ({ pageDB }) => {
  return await AppApi.products.getProducts(pageDB);
});

const fetchProductById = createAsyncThunk('products/fetchProductById', async ({ id }) => {
  return await AppApi.products.getProductById(id);
});

const fetchSetFavorite = createAsyncThunk(
  'productSlice/setFavorite',
  async ({ authToken, productId }, { rejectWithValue }) => {
    try {
      return await AppApi.products.setFavoritesProduct(authToken, productId);
    } catch (e) {
      throw e;
    }
  }
);

const fetchDelFavorite = createAsyncThunk(
  'productSlice/delFavorite',
  async ({ authToken, productId }) => {
    return await AppApi.products.delFavoritesProduct(authToken, productId);
  }
);

const productSlice = createSlice({
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

    builder
      .addCase(fetchSetFavorite.pending, (state, action) => {})
      .addCase(fetchSetFavorite.fulfilled, (state, action) => {})
      .addCase(fetchSetFavorite.rejected, (state, action) => {});

    builder
      .addCase(fetchDelFavorite.pending, (state, action) => {})
      .addCase(fetchDelFavorite.fulfilled, (state, action) => {})
      .addCase(fetchDelFavorite.rejected, (state, action) => {
        console.log(state);
        console.log(action);
      });
  },
});

export { fetchProducts, fetchProductById, fetchSetFavorite, fetchDelFavorite };
export const { loadMoreProducts } = productSlice.actions;
export const reducer = productSlice.reducer;
