import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

import SortDropDown from "./SortDropDown";
import FilterModal from "./FilterModal";

interface ISortList {
  total: number;
}

function SortList({ total }: ISortList) {
  const t = useTranslations("common");

  return (
    <div className="flex justify-between py-4">
      <div className="hidden md:flex gap-4">
        <Icon height="20" icon="icon-park-outline:sort-two" width="20" />
        <h6 className="font-bold">{t("Sort")}</h6>
        <Chip
          color="primary"
          startContent={
            <Icon height="24" icon="lets-icons:check-fill" width="24" />
          }
          variant="faded"
        >
          {t("Recently")}
        </Chip>
        <Chip
          color="primary"
          startContent={
            <Icon height="24" icon="lets-icons:check-fill" width="24" />
          }
          variant="faded"
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
