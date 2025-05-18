"use client";

import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";
import { useState } from "react";

import DateFilter from "./DateFilter";

import { useRouter } from "@/i18n/navigation";
import handleQuery from "@/utils/handleQuery";

function FilterItems({
  query,
}: {
  query: {
    type?: string;
    sort?: string;
    start?: string;
    end?: string;
    page?: string;
  };
}) {
  const [filter, setFilter] = useState<string[]>([]);

  const t = useTranslations("events");
  const router = useRouter();

  const handleChange = (value: string[]) => {
    const lastItem = value[value.length - 1];

    if (value.length) {
      setFilter([lastItem]);
    } else {
      setFilter([]);
    }

    const val = {
      route: "events",
      start: query.start,
      end: query.end,
      sort: query.sort,
      type: lastItem,
      page: query.page,
    };

    const getRoute = handleQuery(val);

    router.push(getRoute);
  };

  return (
    <div className="md:px-4">
      <CheckboxGroup
        className="md:px-0 md:mt-8"
        defaultValue={filter}
        label={t("Filter by Type")}
        value={filter}
        onChange={handleChange}
      >
        <Checkbox value="1">{t("Type1")}</Checkbox>
        <Checkbox value="2">{t("Type2")}</Checkbox>
        <Checkbox value="3">{t("Type3")}</Checkbox>
        <Checkbox value="4">{t("Type4")}</Checkbox>
      </CheckboxGroup>
      <div className="mt-8">
        <h4 className="my-4 text-slate-500">{t("Filter by Date")}</h4>
        <DateFilter
          query={{
            type: query.type || "",
            sort: query.sort || "",
            start: query.start || "",
            end: query.end || "",
            page: query.page || "",
          }}
        />
      </div>
    </div>
  );
}

export default FilterItems;
