"use client";

import { Input } from "@heroui/input";
import { useTranslations } from "use-intl";

interface Props {
  label: string;
  name: string;
  isRequired: boolean;
  type?: "text" | "email" | "password" | "number" | "phone";
  className?: string;
  page?: string;
  formik: any;
}

function CInput({
  label,
  name,
  isRequired,
  type,
  className,
  page,
  formik,
}: Props) {
  const t = useTranslations(
    page === "dashboard" ? "dashboard" : "ngo-registration",
  );

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
