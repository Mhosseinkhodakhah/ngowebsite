import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";
import { FormikErrors, FormikProps } from "formik";

import OtherInput from "./OtherInput";

function AreaActivity({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetAreaActivity = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      if (lastValue !== "other") {
        formik.setFieldValue("otherAreaAndScope", "");
      }
      formik.setFieldValue("areaAndScope", [lastValue]);
    } else {
      formik.setFieldValue("areaAndScope", []);
    }
  };

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Area and scope of activity")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0"
        defaultValue={[]}
        errorMessage={
          formik.errors.areaAndScope &&
          t(formik.errors.areaAndScope as unknown as FormikErrors<any>)
        }
        label={t("In which countries or regions do you primarily operate?")}
        {...formik.getFieldProps("areaAndScope")}
        onChange={handleSetAreaActivity}
      >
        <Checkbox className="my-1" value="western-asia">
          {t("Western Asia")}
        </Checkbox>
        <Checkbox className="my-1" value="central-asia">
          {t("Central Asia")}
        </Checkbox>

        <Checkbox className="my-1" value="other">
          {t("Other")}
        </Checkbox>
      </CheckboxGroup>
      <div className="flex items-center gap-4 flex-1 mx-4 md:mx-0 mt-2">
        <OtherInput
          formik={formik}
          name="otherAreaAndScope"
          refName="areaAndScope"
        />
      </div>
    </>
  );
}

export default AreaActivity;
