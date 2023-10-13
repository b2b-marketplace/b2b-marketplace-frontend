import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
    resetError: (state) => {
      state.error = '';
    },
  },
});

export const { setError, resetError } = errorSlice.actions;

export const errorReducer = errorSlice.reducer;
