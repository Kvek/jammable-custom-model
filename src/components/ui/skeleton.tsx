import type { FC } from "react";

import { cn } from "@lib/utils";

const Skeleton: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn("animate-pulse rounded-md bg-primary/10", className)}
    {...props}
  />
);

export { Skeleton };