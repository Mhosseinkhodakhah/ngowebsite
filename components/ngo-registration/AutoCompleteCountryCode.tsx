"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { useTranslations } from "next-intl";
import { FormikProps } from "formik";

import countriesCodes from "@/constants/countriesCodes";

function AutoCompleteContryCode({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  return (
    <Autocomplete
      isRequired
      className="max-w-40"
      errorMessage={() => {
        if (formik.errors.code) {
          return t(formik.errors.code);
        }
      }}
      label={t("Code")}
      listboxProps={{
        emptyContent: t("Code not found"),
      }}
      {...formik.getFieldProps("code")}
    >
      {countriesCodes.map((code) => (
        <AutocompleteItem key={code.dial_code}>
          {code.dial_code}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}

export default AutoCompleteContryCode;
