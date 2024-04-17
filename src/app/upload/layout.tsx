"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { selectStepsState } from "@redux/steps/selector";
import { resetSteps } from "@redux/steps/slice";
import { useAppDispatch, useAppSelector } from "@redux/store";

import type { WrapperComponentType } from "@types";

import { Steps } from "@components/ui/steps";
import { UploadCta } from "@components/ui/upload-cta";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Layout: WrapperComponentType = ({ children }) => {
  const [showDiscardModal, setShowDiscardModal] = useState(false);

  const { steps } = useAppSelector(selectStepsState);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathName = usePathname();

  const onCancelHandler = (): void => {
    router.push("/");
    dispatch(resetSteps());
  };

  const toggleDiscardModal = (state: boolean) => () => {
    setShowDiscardModal(state);
  };

  const onModalCloseHandler = (): void => {
    if (steps[0].complete) {
      setShowDiscardModal(true);
    } else {
      onCancelHandler();
      setShowDiscardModal(false);
    }
  };
  return (
    <div className="flex h-content w-full flex-col">
      {pathName !== "/upload/train" && <Steps />}
      <div className="h-full">{children}</div>
      <UploadCta onCancelHandler={onModalCloseHandler} />

      <AlertDialog open={showDiscardModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>This will discard your uploaded voice data.</AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={toggleDiscardModal(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setShowDiscardModal(false);
                onCancelHandler();
              }}>
              Discard
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Layout;
