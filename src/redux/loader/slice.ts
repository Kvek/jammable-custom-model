import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface LoaderStateInterface {
  showLoader: boolean;
}

const initialState: LoaderStateInterface = {
  showLoader: false,
};

const loaderSlice = createSlice({
  initialState,
  name: "loader",
  reducers: {
    setLoaderDisplayState: (state, { payload }: PayloadAction<boolean>) => {
      state.showLoader = payload;
    },
  },
});

const { actions, reducer } = loaderSlice;
export const { setLoaderDisplayState } = actions;

export const loader = reducer;
