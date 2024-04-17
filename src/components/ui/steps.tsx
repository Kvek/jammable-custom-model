"use client";

import { Fragment } from "react";

import { selectStepsState } from "@redux/steps/selector";
import { useAppSelector } from "@redux/store";

import { cn } from "@lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";

export const Steps = (): JSX.Element => {
  const { currentCompletedStep, currentStep, steps } = useAppSelector(selectStepsState);

  return (
    <div className="flex w-full justify-center md:my-5 md:pb-5">
      <div className="relative flex h-full w-full max-w-[800px] items-center">
        {steps.map(({ complete, title }, index) => (
          <Fragment key={title}>
            <div className="relative flex flex-col items-center">
              <span
                className={cn(
                  "flex h-[25px] w-[25px] items-center justify-center rounded-full border-2 border-secondary bg-none md:h-[30px] md:w-[30px]",
                  currentStep === index && "border-white/50",
                  complete && index <= currentCompletedStep && "border-none bg-green-500",
                )}>
                <CheckIcon
                  className={cn(
                    "h-4 w-4 text-secondary md:h-5 md:w-5",
                    currentStep === index && "text-white/50",
                    complete && index <= currentCompletedStep && "text-white",
                  )}
                />
              </span>

              <span
                className={cn(
                  "absolute top-6 font-semibold capitalize text-secondary md:top-8",
                  currentStep === index && "text-white/50",
                  complete && index <= currentCompletedStep && "text-primary",
                )}>
                {title}
              </span>
            </div>

            {steps.length - 1 > index && (
              <div className="mx-1 flex h-5 w-full items-center md:h-8">
                <hr
                  className={cn(
                    "h-[2px] w-full border-none bg-secondary bg-gradient-to-r",
                    complete &&
                      index <= currentCompletedStep &&
                      `from-white ${currentCompletedStep >= index + 1 ? "to-white" : "to-secondary"}`,
                  )}
                />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
