import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: {
    select: false,
    registration: false,
    login: false,
    completeRegistration: false,
    completeLogin: false,
    selectRestore: false,
    restoreByPhone: false,
    restoreByEmail: false,
    confirmRestoreByPhone: false,
    confirmRestoreByEmail: false,
    newPassword: false,
    addNewItem: false,
    cancelAddnewItem: false,
    error: false,
  },
};

const togglePopupSlice = createSlice({
  name: 'togglePopup',
  initialState,
  reducers: {
    togglePopup: (state, { payload }) => {
      const { popupType, isOpen } = payload;
      state.isOpen[popupType] = isOpen;
    },
  },
});

export const { togglePopup } = togglePopupSlice.actions;

export const popupReducer = togglePopupSlice.reducer;
