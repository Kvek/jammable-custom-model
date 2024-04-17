"use client";

import { useEffect } from "react";

import Filter from "./Filter";
import VoiceCards from "./VoiceCards";

const Page = ({ searchParams }: { searchParams: Record<string, string[] | string | undefined> }): JSX.Element => {
  useEffect(() => {
    console.log("searchParams", searchParams);
  }, [searchParams]);

  return (
    <div className="h-full w-full">
      <Filter />

      <VoiceCards />
    </div>
  );
};

export default Page;
