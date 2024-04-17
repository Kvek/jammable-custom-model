import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Skeleton } from "@components/ui/skeleton";

import { cn } from "@lib/utils";

const cardsList = new Array<string>(9).fill("");

const VoiceCards = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    (): void => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex w-full flex-wrap gap-2">
      {cardsList.map((_, i) => (
        <div
          className={cn(
            "flex h-full max-h-[118px] w-full max-w-[211px] rounded-sm",
            view === "card" ? "aspect-video min-h-[40px] min-w-full" : "min-h-[108px] min-w-[192px]",
          )}
          key={i.toString()}>
          {loading ? (
            <Skeleton className="flex" />
          ) : (
            <span className="bg-primaryShade flex min-h-full min-w-full rounded-sm border" />
          )}
        </div>
      ))}
    </div>
  );
};

export default VoiceCards;
