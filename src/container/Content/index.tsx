import type { FC } from "react";

import ContentColumn from "./ContentColumn";
import NavColumn from "./NavColumn";

const Content: FC = () => (
  <div className="min-h-content flex h-full w-full md:space-x-4">
    <NavColumn />
    <ContentColumn />
  </div>
);

export default Content;
