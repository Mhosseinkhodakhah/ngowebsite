"use client";

import { Avatar } from "@heroui/avatar";
import { useParams } from "next/navigation";
import { Divider } from "@heroui/divider";

import SideBarRoutes from "./SideBarRoutes";
import LogoutBtn from "./LogoutBtn";

import DashboardRoutes from "@/constants/dashboard-routes";
import useStore from "@/store";

function SideBar() {
  const { locale } = useParams();
  const ngoData: any = useStore((state) => state.ngo);

  return (
    <section
      className={`hidden md:flex md:w-2/5 lg:w-1/4 ${locale === "pe" ? "border-l" : "border-r"} border-dashed flex-col justify-start bg-gray dark:bg-secondary border-secondary dark:border-gray`}
    >
      <div className="w-full flex justify-center items-center p-4">
        <Avatar className="md:w-32 md:h-32" name="Logo" src={ngoData.logo} />
      </div>
      <Divider />
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
