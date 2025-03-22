import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

function ActivityCommunity({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetActivityCommunity = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      if (lastValue === "no") {
        formik.setFieldValue("specificCultureGroupDescription", "");
      }
      formik.setFieldValue("specificCultureGroupValue", [lastValue]);
    } else {
      formik.setFieldValue("specificCultureGroupValue", []);
    }
  };

  return (
    <>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={formik.values.specificCultureGroupValue}
        errorMessage={
          formik.errors.specificCultureGroupValue &&
          t(
            formik.errors
              .specificCultureGroupValue as unknown as FormikErrors<any>
          )
        }
        isInvalid={formik.errors.specificCultureGroupValue ? true : false}
        label={t(
          "Do you focus on specific cultural groups, ethnicities, or communities?"
        )}
        {...formik.getFieldProps("specificCultureGroupValue")}
        onChange={handleSetActivityCommunity}
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
          disabled={
            formik.values.specificCultureGroupValue.includes("yes")
              ? false
              : true
          }
          errorMessage={() => {
            if (
              formik.errors.specificCultureGroupValue &&
              formik.errors.specificCultureGroupDescription
            ) {
              return t(formik.errors.specificCultureGroupDescription);
            }
          }}
          isInvalid={
            formik.values.specificCultureGroupValue.includes("yes") &&
            formik.errors.specificCultureGroupDescription
              ? true
              : false
          }
          isRequired={
            formik.values.specificCultureGroupValue.includes("yes")
              ? true
              : false
          }
          label={t("If yes, please specify")}
          {...formik.getFieldProps("specificCultureGroupDescription")}
        />
      </div>
    </>
  );
}

export default ActivityCommunity;
