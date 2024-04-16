import { Fragment } from "react";

import { cn } from "@lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";

interface StepType {
  complete: boolean;
  title: string;
}

export const Steps = ({ currentStep, steps }: { steps: StepType[]; currentStep: number }): JSX.Element => (
  <div className="flex w-full justify-center">
    <div className="flex h-full w-full max-w-[800px] items-center">
      {steps.map(({ complete, title }, index) => (
        <Fragment key={title}>
          <div className="relative flex flex-col items-center">
            <span
              className={cn(
                "flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-secondary bg-none",
                currentStep === index && "border-white/50",
                complete && "border-none bg-green-500",
              )}>
              <CheckIcon
                className={cn("text-secondary", currentStep === index && "text-white/50", complete && "text-white")}
                height={20}
                width={20}
              />
            </span>

            <span
              className={cn(
                "absolute top-[35px] font-semibold capitalize text-secondary",
                currentStep === index && "text-white/50",
                complete && "text-primary",
              )}>
              {title}
            </span>
          </div>

          {steps.length - 1 > index && (
            <div className="mx-1 flex h-[30px] w-full items-center">
              <hr
                className={cn(
                  "h-[2px] w-full border-none bg-secondary bg-gradient-to-r",
                  complete && `from-white ${currentStep > index + 1 ? "to-white" : "to-secondary"}`,
                )}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  </div>
);
