"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

import { selectDrawersState } from "@redux/drawer/selector";
import { updateDrawerCloseState } from "@redux/drawer/slice";
import { useAppDispatch, useAppSelector } from "@redux/store";

import { Button } from "@components/ui/button";

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
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader } from "@/components/ui/drawer";

const UploadDrawer = (): JSX.Element => {
  const [showDiscardModal, setShowDiscardModal] = useState(false);

  const dispatch = useAppDispatch();
  const open = useAppSelector(selectDrawersState)["upload-drawer"];

  const closeDrawerHandler = (): void => {
    dispatch(updateDrawerCloseState({ key: "upload-drawer" }));
  };

  const toggleDiscardModal = (state: boolean) => () => {
    setShowDiscardModal(state);
  };

  return (
    <>
      <Drawer modal open={open}>
        <DrawerContent>
          <DrawerHeader className="justify-end">
            <Button
              aria-label="drawer close button"
              className="rounded-full"
              id="drawer-close-button"
              onClick={toggleDiscardModal(true)}
              size={"icon"}
              variant={"secondary"}>
              <XIcon height={15} strokeWidth={3} width={15} />
            </Button>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button onClick={toggleDiscardModal(true)} size="lg" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
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
