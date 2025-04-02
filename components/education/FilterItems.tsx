"use client";

import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { useRouter } from "@/i18n/navigation";

function FilterItems({ sort }: { sort?: string }) {
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

    if (lastValue) {
      if (sort) {
        router.push(`/education?type=${lastValue}&sort=${sort}`);
      } else {
        router.push(`/education?type=${lastValue}`);
      }
    } else {
      if (sort) {
        router.push(`/education?sort=${sort}`);
      } else {
        router.push(`/education`);
      }
    }
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
    </div>
  );
}

export default FilterItems;
