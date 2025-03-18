import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

import OtherInput from "./OtherInput";

function ActivityField({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetActivityField = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      if (lastValue !== "other") {
        formik.setFieldValue("otherActivityField", "");
      }
      formik.setFieldValue("activityField", [lastValue]);
    } else {
      formik.setFieldValue("activityField", []);
    }
  };

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Activity Field")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0"
        defaultValue={formik.values.activityField}
        errorMessage={
          formik.errors.activityField &&
          t(formik.errors.activityField as unknown as FormikErrors<any>)
        }
        label={t("Please select the field of ngo activity")}
        {...formik.getFieldProps("activityField")}
        onChange={handleSetActivityField}
      >
        <div className="flex flex-col md:flex-row md:justify-between w-full ">
          <div className="flex flex-col md:gap-4 md:my-4">
            <Checkbox className="mt-1 md:mt-0" value="environment">
              {t("Environment")}
            </Checkbox>
            <Checkbox className="mt-1 md:mt-0" value="language">
              {t("Language")}
            </Checkbox>
          </div>
          <div className="flex flex-col md:gap-4 md:my-4">
            <Checkbox className="mt-1 md:mt-0" value="education-and-culture">
              {t("Education and Culture")}
            </Checkbox>
            <Checkbox className="mt-1 md:mt-0" value="training">
              {t("Training")}
            </Checkbox>
          </div>
          <div className="flex flex-col md:gap-4 md:my-4">
            <Checkbox className="mt-1 md:mt-0" value="Health-Wellness">
              {t("Health & Wellness")}
            </Checkbox>
            <Checkbox className="mt-1 md:mt-0" value="sustainable-development">
              {t("Sustainable development")}
            </Checkbox>
          </div>
        </div>

        <Checkbox className="my-2" value="other">
          {t("Other")}
        </Checkbox>
      </CheckboxGroup>
      <div className="flex items-center gap-4 flex-1 mx-4 md:mx-0 mt-2">
        <OtherInput
          formik={formik}
          name="otherActivityField"
          refName="activityField"
        />
      </div>
    </>
  );
}

export default ActivityField;
