"use client";

import { Input } from "@heroui/input";
import { FormikProps } from "formik";
import { ChangeEvent } from "react";
import { useTranslations } from "use-intl";

function NumberInput({
  formik,
  name,
  label,
  className,
}: {
  formik: FormikProps<any>;
  name: string;
  label: string;
  className?: string;
}) {
  const t = useTranslations("ngo-registration");

  const handleSetNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");

    if (/^\d*$/.test(value)) {
      formik.setFieldValue(name, value);
    }
  };

  return (
    <Input
      isRequired
      className={className}
      errorMessage={() => {
        if (formik.errors[name]) {
          return t(formik.errors[name]);
        }
      }}
      label={t(label)}
      name={name}
      value={formik.values[name]}
      onChange={handleSetNumberInput}
    />
  );
}

export default NumberInput;
