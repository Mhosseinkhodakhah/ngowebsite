import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

function SortList() {
  const t = useTranslations("common");

  return (
    <div className="flex justify-between py-4">
      <div className="flex gap-4">
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
      <div className="flex items-center gap-4">
        <h5>{t("Total")}</h5>
        <Chip className="text-gray" color="primary" variant="shadow">
          24
        </Chip>
      </div>
    </div>
  );
}

export default SortList;
