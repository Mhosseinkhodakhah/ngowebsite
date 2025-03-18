import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

function CooperateCheck({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetCooperateCheck = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      formik.setFieldValue("cooperation", [lastValue]);
    } else {
      formik.setFieldValue("cooperation", []);
    }
  };

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={formik.values.cooperation}
      errorMessage={
        formik.errors.cooperation &&
        t(formik.errors.cooperation as unknown as FormikErrors<any>)
      }
      label={t("Do you want to cooperate with other NGOs?")}
      {...formik.getFieldProps("cooperation")}
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
