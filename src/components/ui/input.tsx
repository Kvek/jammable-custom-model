import * as React from "react";

import { cn } from "@lib/utils";

export type InputPropsType = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
  ({ className, type, ...props }, ref) => (
    <input
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
