"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Icon } from "@iconify/react";
import { useParams } from "next/navigation";
import { useTranslations } from "use-intl";

function DashboardDropDownMenu() {
  const t = useTranslations("dashboard");
  const { locale } = useParams();

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
          className="text-secondary dark:text-gray"
          href={`/${locale}/dashboard/projects`}
          startContent={
            <Icon height="24" icon="eos-icons:project" width="24" />
          }
        >
          {t("Projects")}
        </DropdownItem>
        <DropdownItem
          key="documents"
          className="text-secondary dark:text-gray"
          href={`/${locale}/dashboard/documents`}
          startContent={
            <Icon height="24" icon="solar:document-bold" width="24" />
          }
        >
          {t("Documents")}
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
