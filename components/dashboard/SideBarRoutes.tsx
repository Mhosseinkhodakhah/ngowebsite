"use client";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

import { Link, usePathname } from "@/i18n/navigation";

interface Props {
  route: {
    name: string;
    routes: string;
    icon: ReactNode;
  };
}

function SideBarRoutes({ route }: Props) {
  const pathname = usePathname();
  const t = useTranslations("dashboard");

  return (
    <li
      className={`px-4  rounded-md ${pathname.includes(route.name.toLowerCase()) ? "bg-primary text-gray " : "text-secondary dark:text-gray hover:bg-[#EAEAEA] dark:hover:bg-dark"} transition ease-in duration-100`}
    >
      <Link
        className={`w-full flex justify-between items-center h-full py-2 ${pathname.includes(route.name.toLowerCase()) ? "bg-primary text-gray rounded-md" : "text-secondary dark:text-gray hover:text-dark  dark:hover:bg-dark"} transition ease-in duration-100`}
        href={route.routes}
      >
        {t(route.name)}
        {route.icon}
      </Link>
    </li>
  );
}

export default SideBarRoutes;
