import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

const restoreSlice = createSlice({
  name: 'restore',
  initialState,
  reducers: {
    setState: (state, { payload }) => {
      const { restoreType, newState } = payload;
      state[restoreType] = newState;
    },
    resetState: (state) => {
      state = initialState;
    },
  },
});

export const { setState, resetState } = restoreSlice.actions;

export const restoreReducer = restoreSlice.reducer;
