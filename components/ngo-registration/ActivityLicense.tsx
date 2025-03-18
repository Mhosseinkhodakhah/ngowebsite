import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";
import { FormikErrors, FormikProps } from "formik";
import { Input } from "@heroui/input";

import RegisterDatePicker from "./RegisterDatePicker";

function ActivityLicense({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetActivityLicense = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      if (lastValue === "no") {
        formik.setFieldValue("licenseDescription", "");
      }
      formik.setFieldValue("licenseValue", [lastValue]);
    } else {
      formik.setFieldValue("licenseValue", []);
    }
  };

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Licenses and Permits")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={formik.values.licenseValue}
        errorMessage={
          formik.errors.licenseValue &&
          t(formik.errors.licenseValue as unknown as FormikErrors<any>)
        }
        label={t(
          "Does your organization have licenses and permits for its activities?",
        )}
        {...formik.getFieldProps("licenseValue")}
        onChange={handleSetActivityLicense}
      >
        <Checkbox className="my-1" value="yes">
          {t("YES")}
        </Checkbox>
        <Checkbox className="my-1" value="no">
          {t("NO")}
        </Checkbox>
      </CheckboxGroup>
      <div className="flex items-center gap-4 flex-1 mx-4 md:mx-0 mt-2">
        <Input
          disabled={formik.values.licenseValue.includes("yes") ? false : true}
          errorMessage={() => {
            if (
              formik.errors.licenseValue &&
              formik.errors.licenseDescription
            ) {
              return t(formik.errors.licenseDescription);
            }
          }}
          isInvalid={
            formik.values.licenseValue.includes("yes") &&
            formik.errors.licenseDescription
              ? true
              : false
          }
          isRequired={formik.values.licenseValue.includes("yes") ? true : false}
          label={t("If yes, please specify")}
          {...formik.getFieldProps("licenseDescription")}
        />
      </div>
      <RegisterDatePicker formik={formik} />
    </>
  );
}

export default ActivityLicense;
