import type { WrapperComponentType } from "@types";

import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

const Modal: WrapperComponentType<{ showModal: boolean }> = ({ children, showModal }) => (
  <AlertDialog open={showModal}>
    <AlertDialogContent>{children}</AlertDialogContent>
  </AlertDialog>
);

export default Modal;
