"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

import FilterItems from "./FilterItems";

function FilterEducation({ sort }: { sort?: string }) {
  const t = useTranslations("common");
  const { locale } = useParams();

  return (
    <aside
      className={`hidden md:flex md:w-2/6 lg:w-1/4 sticky top-20 ${locale === "pe" ? "border-l" : "border-r"} border-gray dark:border-secondary max-h-svh
    flex-col`}
    >
      <div className="flex gap-2 p-4">
        <Icon height="24" icon="lets-icons:filter" width="24" />
        <h4 className="font-bold text-xl">{t("Filter")}</h4>
      </div>
      <FilterItems sort={sort} />
    </aside>
  );
}

export default FilterEducation;
