import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type DrawersKeyType = "other-drawer" | "upload-drawer";

export type DrawersToggleStateType = {
  [key in DrawersKeyType]: boolean;
};

export interface DrawersStateInterface {
  list: DrawersToggleStateType;
  current: DrawersKeyType | null;
}

const initialState: DrawersStateInterface = {
  current: null,
  list: {
    "other-drawer": false,
    "upload-drawer": false,
  },
};

const drawerSlice = createSlice({
  initialState,
  name: "drawer",
  reducers: {
    updateDrawerCloseState: (state, { payload: { key } }: PayloadAction<{ key: DrawersKeyType }>) => {
      state.current = null;

      state.list = {
        ...state.list,
        [key]: false,
      };
    },
    updateDrawerOpenState: (
      state,
      { payload: { key, open } }: PayloadAction<{ open: boolean; key: DrawersKeyType }>,
    ) => {
      state.current = key;

      state.list = {
        ...state.list,
        [key]: open,
      };
    },
  },
});

const { actions, reducer } = drawerSlice;
export const { updateDrawerCloseState, updateDrawerOpenState } = actions;
export const drawers = reducer;
