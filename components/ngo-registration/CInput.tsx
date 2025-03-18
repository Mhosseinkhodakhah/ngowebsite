"use client";

import { Input } from "@heroui/input";
import { useTranslations } from "use-intl";

interface Props {
  name: string;
  label: string;
  isRequired: boolean;
  type?: "text" | "email" | "password" | "number";
  className?: string;
  formik: any;
}

function CInput({ label, isRequired, type, className, formik, name }: Props) {
  const t = useTranslations("ngo-registration");

  return (
    <Input
      className={className}
      errorMessage={() => {
        if (formik.errors[name]) {
          return t(formik.errors[name]);
        }
      }}
      isRequired={isRequired}
      label={t(label)}
      type={type}
      {...formik.getFieldProps(name)}
    />
  );
}

export default CInput;
