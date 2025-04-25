"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

import FilterItems from "./FilterItems";

function FilterEvents({
  query,
}: {
  query: { end: any; start: any; sort: any; type: any; page: any };
}) {
  const t = useTranslations("common");
  const { locale } = useParams();

  return (
    <aside
      className={`hidden md:flex lg:w-4/12 xl:w-2/12 sticky top-20 ${locale === "pe" ? "border-l" : "border-r"} border-slate-300 dark:border-slate-500 max-h-svh
    flex-col`}
    >
      <div className="flex gap-2 p-4">
        <Icon height="24" icon="lets-icons:filter" width="24" />
        <h4 className="font-bold text-xl">{t("Filter")}</h4>
      </div>
      <FilterItems query={query} />
    </aside>
  );
}

export default FilterEvents;
