"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";

import DashboardDropDownMenu from "./DashboardDropDownMenu";

import { Link } from "@/i18n/navigation";

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
            {pathname.includes("projects") && (
              <Link href="/dashboard/projects">{t("Projects")}</Link>
            )}
            {pathname.includes("documents") && (
              <Link href="/dashboard/documents">{t("Documents")}</Link>
            )}
          </BreadcrumbItem>
          {pathname.includes("add-project") && (
            <BreadcrumbItem>
              <Link href="/dashboard/projects/add-project">
                {t("Add Project")}
              </Link>
            </BreadcrumbItem>
          )}
          {pathname.includes("add-document") && (
            <BreadcrumbItem>
              <Link href="/dashboard/documents/add-documents">
                {t("Add Documents")}
              </Link>
            </BreadcrumbItem>
          )}
        </Breadcrumbs>
      </div>
      <DashboardDropDownMenu />
    </div>
  );
}

export default DashboardHead;
