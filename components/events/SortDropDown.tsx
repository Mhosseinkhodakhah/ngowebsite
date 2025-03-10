"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

function SortDropDown() {
  const t = useTranslations("common");

  return (
    <Dropdown>
      <DropdownTrigger className="md:hidden">
        <Button className="text-gray" color="primary" size="sm" variant="solid">
          {t("Sort")}
          <Icon height="14" icon="icon-park-outline:sort-two" width="14" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Sort Actions">
        <DropdownItem key="Recently">{t("Recently")}</DropdownItem>
        <DropdownItem key="Last">{t("Last")}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SortDropDown;
