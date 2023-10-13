import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import accountApi from '../../api/accountApi';

export const getUser = createAsyncThunk('account/getData', async (token) => {
  return accountApi.getUser(token);
});

const initialState = {
  user: {
    id: '',
    email: '',
    username: '',
    is_company: false,
    company: {
      id: '',
      role: 'guest',
      company_account: '',
      name: '',
      inn: '',
      ogrn: '',
      phone_number: {
        phone_number: '',
      },
      address: {
        address: '',
      },
    },
  },
  isFetched: false,
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = initialState.user;
      state.isFetched = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isFetched = true;
        state.user = { ...action.payload };
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetUser } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
