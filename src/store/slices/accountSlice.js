import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: '',
    email: '',
    username: '',
    is_company: true,
    company: {
      id: '',
      role: '',
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
});

export const { resetUser } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
