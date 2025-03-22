import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

function CooperateCheck({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetCooperateCheck = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      formik.setFieldValue("cooperationSelect", [lastValue]);
    } else {
      formik.setFieldValue("cooperationSelect", []);
    }
  };

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={formik.values.cooperationSelect}
      errorMessage={
        formik.errors.cooperationSelect &&
        t(formik.errors.cooperationSelect as unknown as FormikErrors<any>)
      }
      label={t("Do you want to cooperate with other NGOs?")}
      {...formik.getFieldProps("cooperationSelect")}
      onChange={handleSetCooperateCheck}
    >
      <Checkbox className="my-1" value="yes">
        {t("YES")}
      </Checkbox>
      <Checkbox className="my-1" value="no">
        {t("NO")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default CooperateCheck;
