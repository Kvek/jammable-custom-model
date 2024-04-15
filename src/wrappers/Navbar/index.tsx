import Image from "next/image";
import type { FC } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

import { BellIcon } from "@radix-ui/react-icons";

const Navbar: FC = () => (
  <div className="h-navbar flex items-center justify-between px-4">
    <div id="logo">
      <Image alt="logo" height={28} src="/logo.svg" width={28} />
    </div>

    <div className="flex items-center space-x-4" id="nav-content">
      <BellIcon className="cursor-pointer" height={18} width={18} />
      <Avatar className="h-8 w-8 border-2 border-foreground">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>
    </div>
  </div>
);

export default Navbar;
