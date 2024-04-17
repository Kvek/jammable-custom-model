import Filter from "./Filter";
import VoiceCards from "./VoiceCards";

const Page = (): JSX.Element => (
  <div className="h-full w-full">
    <Filter />

    <VoiceCards />
  </div>
);

export default Page;
