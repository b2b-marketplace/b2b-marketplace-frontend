import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import authApi from '../../../shared/api/authApi';

export const loginUser = createAsyncThunk('auth/loginUser', authApi.login);

const initialState = {
  isLoggedIn: false,
  auth_token: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn;
      state.auth_token = payload.auth_token;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.auth_token = null;
      state.error = null;
    },
    resetLoading: (state) => {
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.auth_token = payload.auth_token;
    },
    [loginUser.rejected]: (state) => {
      state.isLoading = false;
      state.error = 'Невозможно войти с предоставленными учетными данными.';
    },
  },
});

export const { setAuthentication, logoutUser, resetLoading } = authSlice.actions;

export const authReducer = authSlice.reducer;
