import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { useTranslations } from "next-intl";
import { FormikProps } from "formik";

import countries from "@/constants/countries";

function AutoCompleteCountry({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  return (
    <Autocomplete
      isRequired
      errorMessage={() => {
        if (formik.errors.country) {
          return t(formik.errors.country);
        }
      }}
      label={t("Select an country")}
      listboxProps={{
        emptyContent: t("Country not found"),
      }}
      {...formik.getFieldProps("country")}
      selectedKey={formik.values.country}
      // Fix: Use the correct event type and handle the selection
      onSelectionChange={(val) => {
        formik.setFieldValue("country", val);
      }}
    >
      {countries.map((country) => (
        <AutocompleteItem key={country.name}>
          {t(country.name)}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}

export default AutoCompleteCountry;
