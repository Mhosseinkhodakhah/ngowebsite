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
  page,
  isRequired,
}: {
  formik: FormikProps<any>;
  name: string;
  label: string;
  className?: string;
  page?: string;
  isRequired?: boolean;
}) {
  const t = useTranslations(page ? page : "ngo-registration");

  const handleSetNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");

    if (/^\d*$/.test(value)) {
      formik.setFieldValue(name, value);
    }
  };

  return (
    <Input
      className={className}
      errorMessage={() => {
        if (formik.errors[name] && formik.touched[name]) {
          return t(formik.errors[name]);
        }
      }}
      isInvalid={formik.errors[name] ? true : false}
      isRequired={isRequired ?? true}
      label={t(label)}
      name={name}
      value={formik.values[name]}
      onChange={handleSetNumberInput}
    />
  );
}

export default NumberInput;
