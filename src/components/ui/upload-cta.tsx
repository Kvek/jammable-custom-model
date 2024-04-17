"use client";

import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";

import { setLoaderDisplayState } from "@redux/loader/slice";
import { selectStepsState } from "@redux/steps/selector";
import { updateCurrentCompletedStep } from "@redux/steps/slice";
import { useAppDispatch, useAppSelector } from "@redux/store";

import { Button } from "@components/ui/button";

const stepsTitle = ["Configure", "Upload data"];
const stepsRoutes = ["/upload/config", "/upload/train"];

export const UploadCta = ({ onCancelHandler }: { onCancelHandler: () => void }): JSX.Element => {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useAppDispatch();
  const { currentCompletedStep, steps } = useAppSelector(selectStepsState);

  const toggleNextStepHandler = (): void => {
    const path = stepsRoutes[currentCompletedStep + 1];
    router.push(path as Route);
    dispatch(updateCurrentCompletedStep(steps[currentCompletedStep + 1]));

    if (path === "/upload/train") {
      dispatch(setLoaderDisplayState(true));

      setTimeout(() => {
        dispatch(setLoaderDisplayState(false));
      }, 4000);
    }
  };

  return (
    <div className="w-full">
      <div className="flex h-20 w-full items-end justify-evenly space-x-5 md:justify-end">
        <Button className="min-w-40 max-sm:w-full" onClick={onCancelHandler} size={"lg"} variant="secondary">
          {path !== "/upload/train" ? "Cancel" : "Close"}
        </Button>

        {path !== "/upload/train" && (
          <Button
            className="min-w-40 bg-button-pink max-sm:w-full"
            disabled={!steps[currentCompletedStep + 1]?.complete}
            onClick={toggleNextStepHandler}
            size={"lg"}
            variant={"shell"}>
            {stepsTitle[currentCompletedStep + 1]}
          </Button>
        )}
      </div>
    </div>
  );
};
