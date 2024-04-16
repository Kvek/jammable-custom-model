import type { ReduxStateType } from "@redux/store";

export const selectDisplayLoaderState = ({ loader: { showLoader } }: ReduxStateType): boolean => showLoader;
