"use client";

import { DatePicker } from "@heroui/date-picker";
import {
  getLocalTimeZone,
  parseAbsoluteToLocal,
  today,
} from "@internationalized/date";
import { I18nProvider, useDateFormatter } from "@react-aria/i18n";
import { FormikProps } from "formik";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";

function RegisterDatePicker({ formik }: { formik: FormikProps<any> }) {
  const { locale } = useParams();
  const t = useTranslations("ngo-registration");
  const [date, setDate] = useState(
    parseAbsoluteToLocal(new Date().toISOString()),
  );

  let formatter = useDateFormatter({ dateStyle: "full" });

  const handleSetDate = (value: any) => {
    setDate(value);
    const valueFormated = formatter.format(value.toDate());

    console.log(valueFormated);
    formik.setFieldValue("expiryDate", valueFormated);
  };

  return (
    <div className="flex flex-col gap-4 mt-5 mx-5 md:mx-0">
      <I18nProvider locale={locale === "pe" ? "fa" : "en"}>
        <DatePicker
          hideTimeZone
          showMonthAndYearPickers
          className="max-w-md"
          isDisabled={formik.values.licenseValue.includes("yes") ? false : true}
          isRequired={formik.values.licenseValue.includes("yes") ? true : false}
          label={t("Expiry date")}
          maxValue={today(getLocalTimeZone())}
          value={date}
          variant="bordered"
          onChange={handleSetDate}
        />
      </I18nProvider>
    </div>
  );
}

export default RegisterDatePicker;
