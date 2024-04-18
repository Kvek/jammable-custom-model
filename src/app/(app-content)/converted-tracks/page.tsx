import { type FC, Suspense } from "react";

import Filter from "../Filter";
import TrackCards from "../TrackCards";

const Page: FC = () => (
  <div className="flex h-full w-full flex-col gap-5">
    <Suspense>
      <Filter />
    </Suspense>

    <TrackCards />
  </div>
);

export default Page;
