"use client";

import { usePathname } from "next/navigation";

import type { WrapperComponentType } from "@types";

import { Steps } from "@components/ui/steps";

import UploadDrawer from "./UploadDrawer";

const Layout: WrapperComponentType = ({ children }) => {
  const pathName = usePathname();

  return (
    <div className="h-content w-full">
      <UploadDrawer>
        {pathName !== "/upload/train" && <Steps />}
        <div className="flex h-full w-full flex-col p-2">{children}</div>
      </UploadDrawer>
    </div>
  );
};

export default Layout;
