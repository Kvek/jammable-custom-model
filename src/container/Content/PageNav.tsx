"use client";

import { usePathname } from "next/navigation";

import { NavButtons } from "./NavButtons";

const PageNav = (): JSX.Element => {
  const pathname = usePathname().replace("/", "");

  return (
    <div className="flex h-16 w-full items-center justify-between p-4">
      <NavButtons />
      <span className="text-currentpath text-lg font-semibold">{pathname}</span>
    </div>
  );
};

export default PageNav;
