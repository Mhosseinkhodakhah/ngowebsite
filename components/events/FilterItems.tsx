import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";

import DateFilter from "./DateFilter";

function FilterItems() {
  const t = useTranslations("events");

  return (
    <div className="md:px-4">
      <CheckboxGroup
        className="md:px-0 md:mt-8"
        defaultValue={[]}
        label={t("Filter by Type")}
      >
        <Checkbox value="type">{t("Type")}</Checkbox>
        <Checkbox value="type">{t("Type")}</Checkbox>
        <Checkbox value="type">{t("Type")}</Checkbox>
        <Checkbox value="type">{t("Type")}</Checkbox>
      </CheckboxGroup>
      <div className="mt-8">
        <h4 className="my-4 text-slate-500">{t("Filter by Date")}</h4>
        <DateFilter />
      </div>
    </div>
  );
}

export default FilterItems;
