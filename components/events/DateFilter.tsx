"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { DatePicker } from "@heroui/date-picker";
import { parseAbsoluteToLocal } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";

function DateFilter() {
  const { locale } = useParams();
  const t = useTranslations("events");
  const [startDate, setStartDate] = useState(
    parseAbsoluteToLocal(new Date().toISOString()),
  );
  const [endDate, setEndDate] = useState(
    parseAbsoluteToLocal(new Date().toISOString()),
  );

  return (
    <div className="flex flex-col gap-4">
      <I18nProvider locale={locale === "pe" ? "fa" : "en"}>
        <DatePicker
          hideTimeZone
          showMonthAndYearPickers
          className="max-w-xs"
          label={t("From")}
          value={startDate}
          variant="flat"
          onChange={(value) => setStartDate(value as any)}
        />
      </I18nProvider>
      <I18nProvider locale={locale === "pe" ? "fa" : "en"}>
        <DatePicker
          hideTimeZone
          showMonthAndYearPickers
          className="max-w-xs"
          label={t("To")}
          value={endDate}
          variant="flat"
          onChange={(value) => setEndDate(value as any)}
        />
      </I18nProvider>
    </div>
  );
}

export default DateFilter;
