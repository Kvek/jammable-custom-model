import type { ReduxStateType } from "@redux/store";

export const selectPurchaseModalState = ({ modal: { showModal } }: ReduxStateType): boolean => showModal;
