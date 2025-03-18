import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

function ActivitySpeceficField({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={formik.values.specificActiveAreas}
      errorMessage={
        formik.errors.specificActiveAreas &&
        t(formik.errors.specificActiveAreas as unknown as FormikErrors<any>)
      }
      label={t(
        "Are you specifically active in the following areas? (Please select all relevant options)",
      )}
      value={formik.values.specificActiveAreas}
      onChange={(value: string[]) => {
        formik.setFieldValue("specificActiveAreas", value);
      }}
    >
      <Checkbox className="my-1" value="women">
        {t("Women")}
      </Checkbox>
      <Checkbox className="my-1" value="teaching">
        {t("Teaching")}
      </Checkbox>
      <Checkbox className="my-1" value="children">
        {t("Children")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default ActivitySpeceficField;
