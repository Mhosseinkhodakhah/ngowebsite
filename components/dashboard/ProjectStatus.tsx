import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FormikProps } from "formik";
import { useTranslations } from "next-intl";

function ProjectStatus({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("dashboard");

  const handleSetProjectStatus = (value: string[]) => {
    formik.setFieldValue("status", value);
  };

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0"
      defaultValue={formik.values.status}
      errorMessage={() => {
        if (formik.errors.status && formik.touched.status) {
          return t(formik.errors.status as unknown as string);
        }
      }}
      isInvalid={formik.errors.status ? true : false}
      label={t("Project Status")}
      {...formik.getFieldProps("status")}
      onChange={handleSetProjectStatus}
    >
      <Checkbox className="my-1" value="goodPractice">
        {t("Good Practice")}
      </Checkbox>
      <Checkbox className="my-1" value="ongoing">
        {t("Ongoing")}
      </Checkbox>
      <Checkbox className="my-1" value="collaborationOpportunities">
        {t("Collaboration Opportunities")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default ProjectStatus;
