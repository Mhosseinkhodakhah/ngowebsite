"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { DatePicker } from "@heroui/date-picker";
import { parseAbsoluteToLocal } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";

interface Props {
  label: string;
  className?: string;
}

function ProjectDatePicker({ label, className }: Props) {
  const { locale } = useParams();
  const t = useTranslations("dashboard");
  const [date, setDate] = useState(
    parseAbsoluteToLocal(new Date().toISOString())
  );

  return (
    <div className="flex flex-col gap-4">
      <I18nProvider locale={locale === "pe" ? "fa" : "en"}>
        <DatePicker
          hideTimeZone
          isRequired
          showMonthAndYearPickers
          className={className}
          label={t(label)}
          onChange={setDate}
          value={date}
          variant="flat"
        />
      </I18nProvider>
    </div>
  );
}

export default ProjectDatePicker;
