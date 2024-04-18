import { Suspense } from "react";

import VoiceCards from "../VoiceCards";
import Filter from "../VoicePageFilter";

const Page = (): JSX.Element => (
  <div className="h-full w-full">
    <Suspense>
      <Filter />

      <VoiceCards />
    </Suspense>
  </div>
);

export default Page;
