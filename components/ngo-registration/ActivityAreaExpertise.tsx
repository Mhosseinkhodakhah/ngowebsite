import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

import OtherInput from "./OtherInput";

function ActivityAreaExpertise({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetAreaExpertise = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (lastValue == 'other'){
      value = ['other']
      formik.setFieldValue("areaOfExpertiseValue", "");
    }

    if (lastValue != 'other' && value.includes('other')){
      value.splice(value.indexOf('other') , 1)
    }

    if (value.length) {
      // if (lastValue !== "other") {
      //   formik.setFieldValue("areaOfExpertiseValue", "");
      // }
      formik.setFieldValue("areaOfExpertise", value);
    } else {
      formik.setFieldValue("areaOfExpertise", []);
    }
  };

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Area of expertise")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={formik.values.areaOfExpertise}
        errorMessage={
          formik.errors.areaOfExpertise &&
          t(formik.errors.areaOfExpertise as unknown as FormikErrors<any>)
        }
        label={t(
          "What is your organization's main area of expertise in the field of intangible cultural heritage? (Select all relevant options)",
        )}
        {...formik.getFieldProps("areaOfExpertise")}
        onChange={handleSetAreaExpertise}
      >
        <Checkbox className="my-1" value="Traditions and oral expressions">
          {t("Traditions and oral expressions")}
        </Checkbox>
        <Checkbox
          className="my-1"
          value="Performing Arts (such as music, dance, theater)"
        >
          {t("Performing Arts (such as music, dance, theater)")}
        </Checkbox>
        <Checkbox
          className="my-1"
          value="Social rites, ceremonies and festival events"
        >
          {t("Social rites, ceremonies and festival events")}
        </Checkbox>
        <Checkbox className="my-1" value="africa">
          {t("Traditional handicrafts")}
        </Checkbox>
        <Checkbox
          className="my-1"
          value="knowledge and traditions related to nature and the universe"
        >
          {t("knowledge and traditions related to nature and the universe")}
        </Checkbox>
        <Checkbox className="my-1" value="other">
          {t("Other")}
        </Checkbox>
      </CheckboxGroup>
      <div className="flex items-center gap-4 flex-1 mx-4 md:mx-0 mt-2">
        <OtherInput
          formik={formik}
          name="areaOfExpertiseValue"
          refName="areaOfExpertise"
        />
      </div>
    </>
  );
}

export default ActivityAreaExpertise;
