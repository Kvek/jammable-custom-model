"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

import { selectDrawersState } from "@redux/drawer/selector";
import { updateDrawerCloseState } from "@redux/drawer/slice";
import { useAppDispatch, useAppSelector } from "@redux/store";

import { Button } from "@components/ui/button";
import { Steps } from "@components/ui/steps";

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

import { FileUpload } from "./FileUpload";

export type StepsTitleType = "configure" | "train" | "upload";

export interface StepsInterface {
  title: StepsTitleType;
  complete: boolean;
}

const UploadDrawer = (): JSX.Element => {
  const [steps, setSteps] = useState<StepsInterface[]>([
    { complete: false, title: "upload" },
    { complete: false, title: "configure" },
    { complete: false, title: "train" },
  ]);

  const [currentCompletedStep, setCurrentCompletedStep] = useState(0);

  const [showDiscardModal, setShowDiscardModal] = useState(false);

  const dispatch = useAppDispatch();
  const open = useAppSelector(selectDrawersState)["upload-drawer"];

  const closeDrawerHandler = (): void => {
    dispatch(updateDrawerCloseState({ key: "upload-drawer" }));
  };

  const toggleDiscardModal = (state: boolean) => () => {
    setShowDiscardModal(state);
  };

  const stepCompleteHandler = ({ complete, title }: StepsInterface): void => {
    setSteps((s) => s.map((c) => (c.title === title ? { ...c, complete } : c)));
  };

  const toggleNextStepHandler = (): void => {
    setCurrentCompletedStep((c) => c + 1);
  };

  const onModalCloseHandler = (): void => {
    if (steps[0].complete) {
      setShowDiscardModal(true);
    } else {
      closeDrawerHandler();
      setShowDiscardModal(false);
    }
  };

  return (
    <>
      <Drawer modal dismissible={false} onClose={closeDrawerHandler} open={open}>
        <DrawerContent className="w-full space-y-10 p-2 md:min-w-[400px]">
          <DrawerHeader className="flex w-full flex-col items-end space-y-3">
            <Button
              aria-label="drawer close button"
              className="h-8 w-8 rounded-full"
              id="drawer-close-button"
              onClick={onModalCloseHandler}
              size={"icon"}
              variant={"secondary"}>
              <XIcon height={15} strokeWidth={2} width={15} />
            </Button>

            <Steps currentCompletedStep={currentCompletedStep} steps={steps} />
          </DrawerHeader>

          <FileUpload onFileUploadReady={stepCompleteHandler} />

          <DrawerFooter>
            <div className="w-full">
              <div className="flex h-20 w-full items-end justify-evenly space-x-5 md:justify-end">
                <Button
                  className="min-w-40 max-sm:w-full"
                  onClick={onModalCloseHandler}
                  size={"lg"}
                  variant="secondary">
                  Cancel
                </Button>

                <Button
                  className="min-w-40 bg-button-pink max-sm:w-full"
                  disabled={!steps[currentCompletedStep].complete}
                  onClick={toggleNextStepHandler}
                  size={"lg"}
                  variant={"shell"}>
                  Configure your voices
                </Button>
              </div>
            </div>
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
                closeDrawerHandler();
                setShowDiscardModal(false);
              }}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default UploadDrawer;
