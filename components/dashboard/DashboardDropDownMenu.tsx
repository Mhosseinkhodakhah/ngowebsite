"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Icon } from "@iconify/react";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "use-intl";

function DashboardDropDownMenu() {
  const t = useTranslations("dashboard");
  const { locale } = useParams();
  const pathname = usePathname();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="md:hidden" variant="bordered">
          {t("Menu")}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        <DropdownItem
          key="projects"
          className={`${pathname.includes("projects") && !pathname.includes("add-project") ? "bg-primary text-gray" : "text-secondary"}  dark:text-gray `}
          href={`/${locale}/dashboard/projects`}
          startContent={
            <Icon height="24" icon="eos-icons:project" width="24" />
          }
        >
          {t("Projects")}
        </DropdownItem>
        <DropdownItem
          key="add-project"
          className={`${pathname.includes("/add-project") ? "bg-primary text-gray" : "text-secondary"}  dark:text-gray `}
          href={`/${locale}/dashboard/projects/add-project`}
          startContent={
            <Icon height="16" icon="qlementine-icons:plus-16" width="16" />
          }
        >
          {t("Add Project")}
        </DropdownItem>
        <DropdownItem
          key="documents"
          className={`${pathname.includes("documents") && !pathname.includes("add-document") ? "bg-primary text-gray" : "text-secondary"}  dark:text-gray `}
          href={`/${locale}/dashboard/documents`}
          startContent={
            <Icon height="24" icon="solar:document-bold" width="24" />
          }
        >
          {t("Documents")}
        </DropdownItem>
        <DropdownItem
          key="add-document"
          className={`${pathname.includes("/add-document") ? "bg-primary text-gray" : "text-secondary"}  dark:text-gray `}
          href={`/${locale}/dashboard/documents/add-document`}
          startContent={
            <Icon height="16" icon="qlementine-icons:plus-16" width="16" />
          }
        >
          {t("Add Documents")}
        </DropdownItem>

        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          startContent={
            <Icon height="24" icon="solar:login-outline" width="24" />
          }
        >
          {t("Logout")}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DashboardDropDownMenu;
