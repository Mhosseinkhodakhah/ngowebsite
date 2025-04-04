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

import { useRouter } from "@/i18n/navigation";
import handleQuery from "@/utils/handleQuery";

function SortDropDown({ query }: { query: any }) {
  const t = useTranslations("common");
  const router = useRouter();

  const handleSort = (value: string) => {
    const newquery = { ...query, sort: value };

    const getRouter = handleQuery(newquery);

    router.push(getRouter);
  };

  return (
    <Dropdown>
      <DropdownTrigger className="md:hidden">
        <Button className="text-gray" color="primary" size="sm" variant="solid">
          {t("Sort")}
          <Icon height="14" icon="icon-park-outline:sort-two" width="14" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Sort Actions">
        <DropdownItem key="Recently" onPress={() => handleSort("recent")}>
          {t("Recently")}
        </DropdownItem>
        <DropdownItem key="Last" onPress={() => handleSort("latest")}>
          {t("Last")}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SortDropDown;
