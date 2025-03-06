"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { useTranslations } from "next-intl";

import countriesCodes from "@/constants/countriesCodes";

function AutoCompleteContryCode() {
  const t = useTranslations("ngo-registration");

  return (
    <Autocomplete
      isRequired
      className="max-w-40"
      label={t("Code")}
      listboxProps={{
        emptyContent: t("Code not found"),
      }}
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
