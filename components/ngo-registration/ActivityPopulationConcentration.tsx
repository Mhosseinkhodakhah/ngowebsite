import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

import OtherInput from "./OtherInput";

function ActivityPopulationConcentration({
  formik,
}: {
  formik: FormikProps<any>;
}) {
  const t = useTranslations("ngo-registration");

  const handleSetPopulationConcentration = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      if (lastValue !== "other") {
        formik.setFieldValue("populationConcentrationValue", "");
      }
      formik.setFieldValue("populationConcentration", [lastValue]);
    } else {
      formik.setFieldValue("populationConcentration", []);
    }
  };

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Population concentration")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={formik.values.populationConcentration}
        errorMessage={
          formik.errors.populationConcentration &&
          t(
            formik.errors
              .populationConcentration as unknown as FormikErrors<any>,
          )
        }
        label={t(
          "What is the gender distribution of the community you are working with?",
        )}
        {...formik.getFieldProps("populationConcentration")}
        onChange={handleSetPopulationConcentration}
      >
        <Checkbox className="my-1" value="male">
          {t("Mostly male")}
        </Checkbox>
        <Checkbox className="my-1" value="famale">
          {t("Mostly famale")}
        </Checkbox>
        <Checkbox className="my-1" value="balanced">
          {t("Balanced")}
        </Checkbox>
        <Checkbox className="my-1" value="other">
          {t("Other")}
        </Checkbox>
      </CheckboxGroup>
      <div className="flex items-center gap-4 flex-1 mx-4 md:mx-0 mt-2">
        <OtherInput
          formik={formik}
          name="populationConcentrationValue"
          refName="populationConcentration"
        />
      </div>
    </>
  );
}

export default ActivityPopulationConcentration;
