import type { WrapperComponentType } from "@types";

import PageNav from "./PageNav";

const Content: WrapperComponentType = ({ children }) => (
  <div className="ml-x-pad h-content overflow-hidden rounded-primary bg-primary">
    <PageNav />
    <div className="flex h-full items-center justify-center overflow-scroll px-4 capitalize">{children}</div>
  </div>
);

export default Content;
