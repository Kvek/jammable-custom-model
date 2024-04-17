"use client";

import { useSearchParams } from "next/navigation";

import { Skeleton } from "@components/ui/skeleton";

import { cn } from "@lib/utils";

const cardsList = new Array<string>(9).fill("");

const VoiceCards = (): JSX.Element => {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  return (
    <div className="flex w-full flex-wrap gap-4">
      {cardsList.map((_, i) => (
        <div
          className={cn(
            "flex h-[108px] max-h-[118px] w-[192px] max-w-[211px] rounded-sm",
            view === "list" && "aspect-video h-[70px] min-w-full",
          )}
          key={i.toString()}>
          <Skeleton className="flex rounded-sm" />
        </div>
      ))}
    </div>
  );
};

export default VoiceCards;
