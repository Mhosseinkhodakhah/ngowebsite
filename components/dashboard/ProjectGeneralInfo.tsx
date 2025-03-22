import { Textarea } from "@heroui/input";
import { useTranslations } from "next-intl";
import { FormikProps } from "formik";

import CInput from "../common/cinput";

import ProjectDatePicker from "./ProjectDatePicker";

function ProjectGeneralInfo({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("dashboard");

  return (
    <>
      <h5 className="py-4 px-4 md:px-0">{t("Project General Information")}</h5>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-4 px-4 md:px-0">
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
        <ProjectDatePicker formik={formik} label="End Date" name="endDate" />
      </div>
      <div className="my-4">
        <Textarea
          isClearable
          isRequired
          className="h-40"
          label={t("Description")}
          {...formik.getFieldProps("description")}
        />
      </div>
    </>
  );
}

export default ProjectGeneralInfo;
