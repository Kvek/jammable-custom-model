import NavBlock from "./NavBlock";
import UserBlock from "./UserBlock";

const Sidebar = (): JSX.Element => (
  <div className="h-content w-sidebar fixed hidden flex-col space-y-4 md:flex">
    <UserBlock />
    <NavBlock />
  </div>
);

export default Sidebar;
