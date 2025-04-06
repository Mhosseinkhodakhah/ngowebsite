"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { DatePicker } from "@heroui/date-picker";
import { parseAbsoluteToLocal } from "@internationalized/date";
import { I18nProvider, useDateFormatter } from "@react-aria/i18n";
import { FormikProps } from "formik";

interface Props {
  label: string;
  className?: string;
  formik: FormikProps<any>;
  name: string;
}

function ProjectDatePicker({ label, className, formik, name }: Props) {
  const { locale } = useParams();
  const t = useTranslations("dashboard");
  const [date, setDate] = useState(
    formik.values[name]
      ? parseAbsoluteToLocal(new Date(formik.values[name]).toISOString())
      : parseAbsoluteToLocal(new Date().toISOString())
  );

  let formatter = useDateFormatter({ dateStyle: "full" });

  const handleSetDate = (value: any) => {
    setDate(value);
    const valueFormated = formatter.format(value.toDate());

    formik.setFieldValue(name, valueFormated);
  };

  return (
    <div className="flex flex-col gap-4">
      <I18nProvider locale={locale === "pe" ? "fa" : "en"}>
        <DatePicker
          hideTimeZone
          isRequired
          showMonthAndYearPickers
          className={className}
          errorMessage={() => {
            if (formik.errors[name] && formik.touched[name]) {
              return t(formik.errors[name]);
            }
          }}
          isInvalid={formik.errors[name] ? true : false}
          label={t(label)}
          value={date}
          variant="flat"
          onChange={handleSetDate}
        />
      </I18nProvider>
    </div>
  );
}

export default ProjectDatePicker;
