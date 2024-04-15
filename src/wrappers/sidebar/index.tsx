import NavBlock from "./NavBlock";
import UserBlock from "./UserBlock";

const Sidebar = (): JSX.Element => (
  <div className="hidden max-h-dvh min-h-full w-[400px] min-w-[400px] flex-col space-y-4 md:flex">
    <UserBlock />
    <NavBlock />
  </div>
);

export default Sidebar;
