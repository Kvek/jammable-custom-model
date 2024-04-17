import type { WrapperComponentType } from "@types";

import { Sidebar } from "@wrappers";

import { Content } from "@container";

const Layout: WrapperComponentType = ({ children }) => (
  <>
    <Sidebar />
    <Content>{children}</Content>
  </>
);

export default Layout;
