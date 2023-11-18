import { useSelector } from 'react-redux';
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

import { AppApi } from '../../../shared/api';

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

//Асинхронные операции
export const getUser = createAsyncThunk('userState/getData', async (token) => {
  return AppApi.account.getUser(token);
});

//Слайлсы
const userState = createSlice({
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
//Селекторы
export const useGetUser = () => useSelector((state) => state.account);
export const { resetUser } = userState.actions;
export const reducer = userState.reducer;
