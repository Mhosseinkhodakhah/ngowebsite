"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { DatePicker } from "@heroui/date-picker";
import { parseAbsoluteToLocal } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";

import { useRouter } from "@/i18n/navigation";
import handleQuery from "@/utils/handleQuery";

function DateFilter({
  query,
}: {
  query: {
    type: any;
    sort: any;
    start: any;
    end: any;
    page: any;
  };
}) {
  const { locale } = useParams();
  const t = useTranslations("events");
  const [startDate, setStartDate] = useState(
    parseAbsoluteToLocal(new Date().toISOString()),
  );
  const [endDate, setEndDate] = useState(
    parseAbsoluteToLocal(new Date().toISOString()),
  );

  const router = useRouter();

  return (
    <>
      <h4 className="my-4 text-slate-500">{t("Filter by Date")}</h4>

      <div className="flex flex-col gap-4">
        <I18nProvider locale={locale === "pe" ? "fa" : "en"}>
          <DatePicker
            hideTimeZone
            showMonthAndYearPickers
            className="max-w-xs"
            classNames={{
              selectorButton: "bg-primary text-white",
            }}
            label={t("From")}
            value={startDate}
            variant="flat"
            onChange={(value: any) => {
              setStartDate(value as any);
              const startValue = `${value.year}-${value.month}-${value.day}`;

              const val = {
                route: "education",
                start: startValue,
                end: query.end,
                sort: query.sort,
                type: query.type,
                page: query.page,
              };

              const getRoute = handleQuery(val);

              router.push(getRoute);
            }}
          />
        </I18nProvider>
        <I18nProvider locale={locale === "pe" ? "fa" : "en"}>
          <DatePicker
            hideTimeZone
            showMonthAndYearPickers
            className="max-w-xs"
            classNames={{
              selectorButton: "bg-primary text-white",
            }}
            label={t("To")}
            value={endDate}
            variant="flat"
            onChange={(value: any) => {
              setEndDate(value as any);
              const endValue = `${value.year}-${value.month}-${value.day}`;

              const val = {
                route: "education",
                start: query.start,
                end: endValue,
                sort: query.sort,
                type: query.type,
                page: query.page,
              };

              const getRoute = handleQuery(val);

              router.push(getRoute);
            }}
          />
        </I18nProvider>
      </div>
    </>
  );
}

export default DateFilter;
