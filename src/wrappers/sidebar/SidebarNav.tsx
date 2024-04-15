import { Library, Mic, Pencil, ShuffleIcon } from "lucide-react";
import React from "react";

import { Button } from "@components/ui/button";

import { PlusIcon } from "@radix-ui/react-icons";

import { SidebarNavItems } from "./SidebarNavItems";

const SidebarNav = (): JSX.Element => (
  <div className="rounded-primary flex h-full w-full flex-col space-y-10 bg-primary p-4">
    <div className="flex items-center justify-between">
      <h1 className="flex items-end space-x-1">
        <Library height={35} width={35} />
        <span className="text-xl font-medium">Your Content</span>
      </h1>

      <Button
        className="from-button-pink to-button-purple flex items-center space-x-1 bg-gradient-to-r p-1.5 opacity-95 hover:opacity-100"
        size={"shell"}
        variant={"shell"}>
        <PlusIcon className="font-semibold" height={15} width={15} />
        <span>Upload Voice</span>
      </Button>
    </div>

    <div className="flex h-full w-full flex-col space-y-2">
      <SidebarNavItems Icon={Mic} href="/my-voices" title={"My Voices"} />

      <SidebarNavItems
        Icon={ShuffleIcon}
        href="/converted-tracks"
        title={"Converted Tracks"}
      />

      <SidebarNavItems
        Icon={Pencil}
        href="/edit-profile"
        title={"Edit Profile"}
      />
    </div>
  </div>
);

export default SidebarNav;
