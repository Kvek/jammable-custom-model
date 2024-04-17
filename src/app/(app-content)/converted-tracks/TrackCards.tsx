import { Skeleton } from "@components/ui/skeleton";

import { cn } from "@lib/utils";
import { DiscIcon } from "@radix-ui/react-icons";

const cardsList = new Array<string>(13).fill("");

const TrackCards = (): JSX.Element => (
  <div className="flex w-full flex-wrap gap-5">
    {cardsList.map((_, i) => (
      <div className={cn("flex h-[100px] w-[370px]")} key={i.toString()}>
        <div className="flex w-full rounded-sm">
          <Skeleton className="flex h-[100px] w-[100px] items-center justify-center  rounded-l-sm">
            <DiscIcon className="opacity-30" height={50} width={50} />
          </Skeleton>

          <div className="flex flex-col justify-center gap-3 rounded-r-sm border border-l-0  p-4">
            <Skeleton className=" h-5 w-[200px] rounded-sm " />
            <Skeleton className=" h-3 w-[100px] rounded-sm " />
            <Skeleton className=" h-3 w-full rounded-sm " />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TrackCards;
