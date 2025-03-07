"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";

import DashboardDropDownMenu from "./DashboardDropDownMenu";

function DashboardHead() {
  const pathname = usePathname();
  const t = useTranslations("dashboard");

  return (
    <div className="flex justify-between w-full items-center py-4">
      <div>
        <h1 className="text-xl font-bold">
          {pathname.includes("projects") && t("Projects")}
          {pathname.includes("documents") && t("Documents")}
        </h1>
        <Breadcrumbs>
          <BreadcrumbItem>{t("Dashboard")}</BreadcrumbItem>
          <BreadcrumbItem>
            {pathname.includes("projects") && t("Projects")}
            {pathname.includes("documents") && t("Documents")}
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <DashboardDropDownMenu />
    </div>
  );
}

export default DashboardHead;
