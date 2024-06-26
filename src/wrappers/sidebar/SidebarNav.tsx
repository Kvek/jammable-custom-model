"use client";

import { Library, Mic, Pencil, PlusIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { setModalDisplayState } from "@redux/purchase-modal/slice";
import { useAppDispatch } from "@redux/store";

import { Button } from "@components/ui/button";
import { Checkbox } from "@components/ui/checkbox";

import { SidebarNavItems } from "./SidebarNavItems";

const SidebarNav = (): JSX.Element => {
  const [noCredits, setNoCredits] = useState(false);
  const dispatch = useAppDispatch();

  const ctaButton = noCredits ? (
    <Button
      aria-label="voice upload button"
      className="flex items-center space-x-1 bg-gradient-to-r from-button-pink to-button-purple px-2 py-2 text-sm font-normal leading-3 opacity-95 hover:opacity-100"
      id="upload-button"
      onClick={() => dispatch(setModalDisplayState(true))}
      size={"shell"}
      variant={"shell"}>
      <PlusIcon height={15} strokeWidth={3} width={15} />
      <span>Upload Voice</span>
    </Button>
  ) : (
    <Link href="/upload">
      <Button
        aria-label="voice upload button"
        className="flex items-center space-x-1 bg-gradient-to-r from-button-pink to-button-purple px-2 py-2 text-sm font-normal leading-3 opacity-95 hover:opacity-100"
        id="upload-button"
        size={"shell"}
        variant={"shell"}>
        <PlusIcon height={15} strokeWidth={3} width={15} />
        <span>Upload Voice</span>
      </Button>
    </Link>
  );

  return (
    <div className="flex h-full w-full flex-col space-y-10 rounded-primary bg-primary p-4">
      <div className="flex items-center justify-between">
        <h1 className="flex items-end space-x-1">
          <Library height={35} width={35} />
          <span className="text-xl font-medium">Your Content</span>
        </h1>

        {ctaButton}
      </div>

      <div className="flex h-full w-full flex-col space-y-2">
        <SidebarNavItems Icon={Mic} href="/my-voices" title={"My Voices"} />

        <SidebarNavItems Icon={ShuffleIcon} href="/converted-tracks" title={"Converted Tracks"} />

        <SidebarNavItems Icon={Pencil} href="/edit-profile" title={"Edit Profile"} />
      </div>
      <div>
        <div className="flex cursor-pointer items-center space-x-2">
          <Checkbox
            checked={noCredits}
            id="no-credits"
            onCheckedChange={(c) => {
              setNoCredits(c as boolean);
            }}
          />
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="no-credits">
            Toggle no credits
          </label>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
