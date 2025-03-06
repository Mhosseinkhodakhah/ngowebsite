"use client";

import { DatePicker } from "@heroui/date-picker";
import {
  getLocalTimeZone,
  parseAbsoluteToLocal,
  today,
} from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";

function RegisterDatePicker() {
  const { locale } = useParams();
  const t = useTranslations("ngo-registration");
  const [date, setDate] = useState(
    parseAbsoluteToLocal(new Date().toISOString()),
  );

  return (
    <div className="flex flex-col gap-4 mt-5">
      <I18nProvider locale={locale === "pe" ? "fa" : "en"}>
        <DatePicker
          hideTimeZone
          showMonthAndYearPickers
          className="max-w-md"
          label={t("Expiry date")}
          onChange={setDate}
          value={date}
          variant="bordered"
          maxValue={today(getLocalTimeZone())}
        />
      </I18nProvider>
    </div>
  );
}

export default RegisterDatePicker;
