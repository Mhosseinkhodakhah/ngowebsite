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
  const t = useTranslations("education");
  const [filter, setFilter] = useState<string[]>([]);
  const router = useRouter();

  const handleChange = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      setFilter([lastValue]);
    } else {
      setFilter([]);
    }

    const val = {
      route: "education",
      start: query.start,
      end: query.end,
      sort: query.sort,
      type: lastValue,
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
        label={t("Filter by file format")}
        value={filter}
        onChange={handleChange}
      >
        <Checkbox value="image">{t("Image")}</Checkbox>
        <Checkbox value="video">{t("Video")}</Checkbox>
        <Checkbox value="pdf">{t("PDF")}</Checkbox>
        <Checkbox value="word">{t("Word File")}</Checkbox>
      </CheckboxGroup>
      <div className="mt-8">
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
