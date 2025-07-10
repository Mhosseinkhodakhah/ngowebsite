import { Textarea } from "@heroui/input";
import { useTranslations } from "next-intl";
import { FormikProps } from "formik";

import CInput from "../common/cinput";

import ProjectDatePicker from "./ProjectDatePicker";

function ProjectGeneralInfo({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("dashboard");

  return (
    <>
      <h5 className="py-4">{t("Project General Information")}</h5>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
        <CInput
          isRequired
          formik={formik}
          label="Project Name"
          name="name"
          page="dashboard"
        />
        <ProjectDatePicker
          formik={formik}
          label="Start Date"
          name="startDate"
        />
      </div>
      <div className="my-4">
        <Textarea
          isClearable
          isRequired
          className="h-40"
          errorMessage={() => {
            if (formik.errors.description && formik.touched.description) {
              return t(formik.errors.description);
            }
          }}
          isInvalid={formik.errors.description ? true : false}
          label={t("Description")}
          {...formik.getFieldProps("description")}
        />
      </div>
    </>
  );
}

export default ProjectGeneralInfo;
