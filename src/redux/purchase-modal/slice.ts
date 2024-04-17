import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ModalStateInterface {
  showModal: boolean;
}

const initialState: ModalStateInterface = {
  showModal: false,
};

const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    setModalDisplayState: (state, { payload }: PayloadAction<boolean>) => {
      state.showModal = payload;
    },
  },
});

const { actions, reducer } = modalSlice;
export const { setModalDisplayState } = actions;

export const modal = reducer;
