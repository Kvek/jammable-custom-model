"use client";

import { selectDisplayLoaderState } from "@redux/loader/selector";
import { useAppSelector } from "@redux/store";

import { LoaderIcon } from "@components/ui/loader";

const Loader = (): JSX.Element | null => {
  const displayLoader = useAppSelector(selectDisplayLoaderState);

  if (!displayLoader) return null;

  return (
    <div className="fixed left-0 top-0 z-[999] flex h-full w-full select-none items-center justify-center">
      <div className="absolute h-full w-full bg-background" />
      <span className="z-[2]">
        <LoaderIcon />
      </span>
    </div>
  );
};

export default Loader;
