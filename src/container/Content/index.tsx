import type { WrapperComponentType } from "@types";

const Content: WrapperComponentType = ({ children }) => (
  <div className="h-full overflow-scroll">{children}</div>
);

export default Content;
