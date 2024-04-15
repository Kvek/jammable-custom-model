import type { WrapperComponentType } from "@types";

const Content: WrapperComponentType = ({ children }) => (
  <div className="min-h-content rounded-primary h-full w-full bg-primary">
    {children}
  </div>
);

export default Content;
