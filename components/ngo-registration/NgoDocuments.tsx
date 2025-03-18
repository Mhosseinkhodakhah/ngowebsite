import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

function NgoDocuments({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={formik.values.documents}
      errorMessage={
        formik.errors.documents &&
        t(formik.errors.documents as unknown as FormikErrors<any>)
      }
      label={t("Upload documents (one of the mandatory items)")}
      {...formik.getFieldProps("documents")}
      onChange={(value: string[]) => formik.setFieldValue("documents", value)}
    >
      <Checkbox className="my-1" value="statutes">
        {t("Statutes")}
      </Checkbox>
      <Checkbox className="my-1" value="activity-license">
        {t("Activity license")}
      </Checkbox>
      <Checkbox
        className="my-1"
        value="introduction-letter-of-related-institutions"
      >
        {t("Introduction letter of related institutions")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default NgoDocuments;
