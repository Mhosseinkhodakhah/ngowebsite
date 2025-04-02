"use client";

import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

import SortDropDown from "./SortDropDown";
import FilterModal from "./FilterModal";

import { useRouter } from "@/i18n/navigation";
interface ISortList {
  total: number;
  sort: string | undefined;
  type: string | undefined;
}

function SortList({ total, sort, type }: ISortList) {
  const t = useTranslations("common");

  const router = useRouter();

  return (
    <div className="flex justify-between py-4">
      <div className="hidden md:flex gap-4">
        <Icon height="20" icon="icon-park-outline:sort-two" width="20" />
        <h6 className="font-bold">{t("Sort")}</h6>
        <Chip
          className="cursor-pointer"
          color="primary"
          startContent={
            sort === "recent" && (
              <Icon height="24" icon="lets-icons:check-fill" width="24" />
            )
          }
          variant="faded"
          onClick={() => {
            if (type) {
              router.push(`/education?type=${type}&sort=recent`);
            } else {
              router.push(`/education?sort=recent`);
            }
          }}
        >
          {t("Recently")}
        </Chip>
        <Chip
          className="cursor-pointer"
          color="primary"
          startContent={
            sort === "latest" && (
              <Icon height="24" icon="lets-icons:check-fill" width="24" />
            )
          }
          variant="faded"
          onClick={() => {
            if (type) {
              router.push(`/education?type=${type}&sort=latest`);
            } else {
              router.push(`/education?sort=latest`);
            }
          }}
        >
          {t("Last")}
        </Chip>
      </div>
      <div className="flex gap-2">
        <SortDropDown />
        <FilterModal />
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        <h5 className="text-xs md:text-md">{t("Total")}</h5>
        <Chip
          className="text-gray text-xs md:text-md"
          color="primary"
          variant="shadow"
        >
          {total}
        </Chip>
      </div>
    </div>
  );
}

export default SortList;
