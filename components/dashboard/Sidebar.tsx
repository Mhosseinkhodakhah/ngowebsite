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
      className={`hidden lg:flex md:w-2/5 lg:w-2/12 ${locale === "pe" ? "border" : "border-r"} border-dot flex-col justify-start light:bg-violet-100 rounded-e-2xl border-slate-300 dark:border-gray shadow-lg h-[98%]`}
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
