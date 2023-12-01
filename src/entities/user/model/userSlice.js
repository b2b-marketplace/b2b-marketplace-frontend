import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { AppApi } from '../../../shared/api';

const initialState = {
  user: {
    id: '',
    email: '',
    username: '',
    is_company: false,
    role: '',
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
export const getUser = createAsyncThunk('userSlice/getUser', async (token) => {
  return AppApi.user.getUser(token);
});

//Слайлсы
const userSlice = createSlice({
  name: 'user',
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
export const useGetUser = () => useSelector((state) => state.user);
export const { resetUser } = userSlice.actions;
export const reducer = userSlice.reducer;
