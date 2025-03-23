"use client";

import { Button } from "@heroui/button";
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
  endContent?: React.ReactNode;
  onVisible?: (value: any) => void;
}

function CInput({
  label,
  name,
  isRequired,
  type,
  className,
  page,
  formik,
  endContent,
  onVisible,
}: Props) {
  const t = useTranslations(
    page === "dashboard" ? "dashboard" : "ngo-registration",
  );

  const handleVisible = () => {
    if (onVisible) {
      onVisible((prev: boolean) => !prev);
    }
  };

  return (
    <Input
      className={className}
      endContent={
        endContent && (
          <Button isIconOnly color="default" size="sm" onPress={handleVisible}>
            {endContent}
          </Button>
        )
      }
      errorMessage={() => {
        if (formik.errors[name]) {
          return t(formik.errors[name]);
        }
      }}
      isInvalid={formik.errors[name] ? true : false}
      isRequired={isRequired}
      label={t(label)}
      type={type}
      {...formik.getFieldProps(name)}
    />
  );
}

export default CInput;
