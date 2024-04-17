import type { FC } from "react";

import { cn } from "@lib/utils";

const Skeleton: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("w-full animate-pulse rounded-md bg-primary", className)} {...props} />
);

export { Skeleton };
