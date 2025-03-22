import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";
import { FormikProps, FormikErrors } from "formik";

function ConditionAndConfirm({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetConditionAndConfirm = (value: string[]) => {
    formik.setFieldValue("conditonAndConfirm", value);
  };

  return (
    <>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={formik.values.conditonAndConfirm}
        errorMessage={
          formik.errors.conditonAndConfirm &&
          t(formik.errors.conditonAndConfirm as unknown as FormikErrors<any>)
        }
        isInvalid={!!formik.errors.conditonAndConfirm}
        label={t("Confirm and send")}
        {...formik.getFieldProps("conditonAndConfirm")}
        onChange={handleSetConditionAndConfirm}
      >
        <Checkbox className="my-1" value="confirm">
          {t(
            "I confirm that the information provided is correct and complete and that any liability arising from inaccuracy or This organization will be responsible for the inaccuracy of this information"
          )}
        </Checkbox>
        <Checkbox className="my-1" value="terms-and-condition">
          {t(
            "I have read the registration terms and conditions and I agree with them Any liability arising from non-compliance These conditions will be the responsibility of this organization"
          )}
        </Checkbox>
      </CheckboxGroup>
    </>
  );
}

export default ConditionAndConfirm;
