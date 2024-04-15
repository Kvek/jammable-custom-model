"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@components/ui/button";

import { pathNameExtractor } from "@lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const PageNav = (): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-16 w-full items-center justify-between p-4">
      <div className="flex space-x-4">
        <Button
          aria-label="page navigation back button"
          className="rounded-full"
          id="page-navigation-back-button"
          onClick={() => {
            router.back();
          }}
          size={"icon"}
          variant={"secondary"}>
          <ChevronLeftIcon height={15} width={15} />
        </Button>

        <Button
          aria-label="page navigation forward button"
          className="rounded-full"
          id="page-navigation-forward-button"
          onClick={() => {
            router.forward();
          }}
          size={"icon"}
          variant={"secondary"}>
          <ChevronRightIcon height={15} width={15} />
        </Button>
      </div>

      <span className="text-base font-medium capitalize text-currentpath opacity-95">
        {pathNameExtractor(pathname)}
      </span>
    </div>
  );
};

export default PageNav;
