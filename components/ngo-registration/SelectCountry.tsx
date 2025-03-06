"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { useTranslations } from "next-intl";

import countries from "@/constants/countries";

function AutoCompleteCountry() {
  const t = useTranslations("ngo-registration");

  return (
    <Autocomplete
      isRequired
      label={t("Select an country")}
      listboxProps={{
        emptyContent: t("Country not found"),
      }}
    >
      {countries.map((country) => (
        <AutocompleteItem key={country.code}>
          {t(country.name)}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}

export default AutoCompleteCountry;
