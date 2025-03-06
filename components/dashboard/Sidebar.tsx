import { Avatar } from "@heroui/avatar";

import SideBarRoutes from "./SideBarRoutes";
import LogoutBtn from "./LogoutBtn";

import DashboardRoutes from "@/constants/dashboard-routes";

function SideBar() {
  return (
    <section className="md:w-1/4 border-l border-dashed flex flex-col justify-start bg-gray dark:bg-secondary">
      <div className="w-full flex justify-center items-center p-4">
        <Avatar className="md:w-32 md:h-32" name="Logo" />
      </div>
      <ul className="w-full flex-col justify-start px-4 mt-12 flex-1 gap-4 flex">
        {DashboardRoutes.map((route: any) => (
          <SideBarRoutes key={route.name} route={route} />
        ))}
      </ul>
      <LogoutBtn />
    </section>
  );
}

export default SideBar;
