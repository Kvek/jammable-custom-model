"use client";

import { usePathname } from "next/navigation";

import { pathNameExtractor } from "@lib/utils";

import { NavButtons } from "./NavButtons";

const PageNav = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className="flex h-16 w-full items-center justify-between p-4">
      <NavButtons />

      <span className="text-base font-medium capitalize text-currentpath">
        {pathNameExtractor(pathname)}
      </span>
    </div>
  );
};

export default PageNav;
