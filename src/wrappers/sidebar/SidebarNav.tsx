"use client";

import { Library, Mic, Pencil, PlusIcon, ShuffleIcon } from "lucide-react";
import React from "react";

import { updateDrawerOpenState } from "@redux/drawer/slice";
import { useAppDispatch } from "@redux/store";

import { Button } from "@components/ui/button";

import { SidebarNavItems } from "./SidebarNavItems";

const SidebarNav = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-full w-full flex-col space-y-10 rounded-primary bg-primary p-4">
      <div className="flex items-center justify-between">
        <h1 className="flex items-end space-x-1">
          <Library height={35} width={35} />
          <span className="text-xl font-medium">Your Content</span>
        </h1>

        <Button
          aria-label="voice upload button"
          className="flex items-center space-x-1 bg-gradient-to-r from-button-pink to-button-purple px-2 py-2 text-sm font-normal leading-3 opacity-95 hover:opacity-100"
          id="upload-button"
          onClick={() => dispatch(updateDrawerOpenState({ key: "upload-drawer", open: true }))}
          size={"shell"}
          variant={"shell"}>
          <PlusIcon height={15} strokeWidth={3} width={15} />
          <span>Upload Voice</span>
        </Button>
      </div>

      <div className="flex h-full w-full flex-col space-y-2">
        <SidebarNavItems Icon={Mic} href="/my-voices" title={"My Voices"} />

        <SidebarNavItems Icon={ShuffleIcon} href="/converted-tracks" title={"Converted Tracks"} />

        <SidebarNavItems Icon={Pencil} href="/edit-profile" title={"Edit Profile"} />
      </div>
    </div>
  );
};

export default SidebarNav;
