"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@lib/utils";
import * as TogglePrimitive from "@radix-ui/react-toggle";

const toggleVariants = cva(
  `inline-flex items-center justify-center rounded-full
  py-1 text-sm
  font-medium transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-1 
  focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-foreground data-[state=on]:text-background`,
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "px-3",
        lg: "px-4",
        sm: "px-0.5",
      },
      variant: {
        default: "bg-primary",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, size, variant, ...props }, ref) => (
  <TogglePrimitive.Root className={cn(toggleVariants({ className, size, variant }))} ref={ref} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
