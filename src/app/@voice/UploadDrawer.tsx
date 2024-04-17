"use client";

import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";

import { selectStepsState } from "@redux/steps/selector";
import { resetSteps } from "@redux/steps/slice";
import { useAppDispatch, useAppSelector } from "@redux/store";

import { Button } from "@components/ui/button";
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
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader } from "@/components/ui/drawer";

const UploadDrawer = ({ children }: { children: ReactNode }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { allStepsComplete, steps } = useAppSelector(selectStepsState);
  const [showDrawer, setShowDrawer] = useState(true);
  const router = useRouter();

  const [showDiscardModal, setShowDiscardModal] = useState(false);

  const closeDrawerHandler = (): void => {
    dispatch(resetSteps());
    setShowDrawer(false);
  };

  const toggleDiscardModal = (state: boolean) => () => {
    setShowDiscardModal(state);
  };

  const onModalCloseHandler = (): void => {
    if (!allStepsComplete) {
      if (steps[0].complete) {
        setShowDiscardModal(true);
      } else {
        closeDrawerHandler();
        setShowDiscardModal(false);
      }
    } else {
      router.push("/");
      closeDrawerHandler();
    }
  };

  return (
    <>
      <Drawer modal dismissible={false} onClose={closeDrawerHandler} open={showDrawer}>
        <DrawerContent className="w-full p-2 md:min-w-[400px]">
          <DrawerHeader className="flex min-h-16 w-full flex-col items-end space-y-3">
            {!allStepsComplete && (
              <Button
                aria-label="drawer close button"
                className="h-8 w-8 rounded-full"
                id="drawer-close-button"
                onClick={onModalCloseHandler}
                size={"icon"}
                variant={"secondary"}>
                <XIcon height={15} strokeWidth={2} width={15} />
              </Button>
            )}
          </DrawerHeader>
          {children}
          <DrawerFooter>
            <UploadCta onCancelHandler={onModalCloseHandler} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

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
                closeDrawerHandler();
              }}>
              Discard
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default UploadDrawer;
