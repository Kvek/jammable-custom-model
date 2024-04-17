import { useEffect, useState } from "react";

import { Skeleton } from "@components/ui/skeleton";

const cardsList = new Array<string>(14).fill("");

const VoiceCards = (): JSX.Element => {
  const [loading, setLoading] = useState(true);

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
          className="flex h-full max-h-[118px] min-h-[108px] w-full min-w-[192px] max-w-[211px] rounded-sm"
          key={i.toString()}>
          {loading ? (
            <Skeleton className="h-full w-full" />
          ) : (
            <span className="bg-primaryShade flex min-h-full min-w-full rounded-sm border" />
          )}
        </div>
      ))}
    </div>
  );
};

export default VoiceCards;
