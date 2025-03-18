import { Textarea } from "@heroui/input";
import { FormikProps } from "formik";
import { useTranslations } from "next-intl";

function DescriptionField({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Additional information")}</h5>
      <Textarea
        isRequired
        errorMessage={() => {
          if (formik.errors.additionalInformation) {
            return t(formik.errors.additionalInformation);
          }
        }}
        label={t(
          "Brief explanation about the goals and activities of the organization",
        )}
        {...formik.getFieldProps("additionalInformation")}
      />
    </>
  );
}

export default DescriptionField;
