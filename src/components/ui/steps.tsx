import { Fragment } from "react";

import { cn } from "@lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";

interface StepType {
  complete: boolean;
  title: string;
}

export const Steps = ({ steps }: { steps: StepType[] }): JSX.Element => (
  <div className="flex w-full justify-center">
    <div className="flex h-full w-full max-w-[800px] items-center">
      {steps.map(({ complete, title }, index) => (
        <Fragment key={title}>
          <div className="relative flex flex-col items-center">
            <span
              className={cn(
                "flex h-[30px] w-[30px] items-center justify-center rounded-full border-2",
                complete ? "border-none bg-green-500" : "border-secondary bg-none",
              )}>
              <CheckIcon className={cn(complete ? "text-white" : "text-secondary")} height={20} width={20} />
            </span>

            <span
              className={cn(
                "absolute top-[35px] font-semibold capitalize",
                complete ? "text-primary" : "text-secondary",
              )}>
              {title}
            </span>
          </div>

          {steps.length - 1 > index && (
            <div className="mx-1 flex h-[30px] w-full items-center">
              <hr
                className={cn(
                  "transition-color h-[2px] w-full border-none bg-gradient-to-r",
                  complete ? "bg-primary" : "bg-secondary",
                )}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  </div>
);
