import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthModalState {
  isOpened: boolean;
  modalType: "login" | "register" | "resetPassword" | null;
}

const initialState: AuthModalState = {
  isOpened: false,
  modalType: null,
};

export const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openAuthModal: (
      state,
      action: PayloadAction<AuthModalState["modalType"]>
    ) => {
      state.isOpened = true;
      state.modalType = action.payload;
    },
    closeAuthModal: (state) => {
      state.isOpened = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = authModalSlice.actions;
export default authModalSlice.reducer;
