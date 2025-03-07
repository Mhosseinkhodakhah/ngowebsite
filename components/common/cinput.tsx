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
}

function CInput({ label, name, isRequired, type, className, page }: Props) {
  const t = useTranslations(
    page === "dashboard" ? "dashboard" : "ngo-registration",
  );

  return (
    <Input
      className={className}
      isRequired={isRequired}
      label={t(label)}
      name={name}
      type={type}
    />
  );
}

export default CInput;
