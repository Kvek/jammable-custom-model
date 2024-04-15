import type { ReduxStateType } from "@redux/store";

import type { DrawersKeyType, DrawersToggleStateType } from "./slice";

export const selectDrawersState = ({ drawers: { list } }: ReduxStateType): DrawersToggleStateType => list;

export const selectCurrentDrawerState = ({ drawers: { current } }: ReduxStateType): DrawersKeyType | null => current;
