import { useTranslations } from "next-intl";
import { FormikProps } from "formik";

import CInput from "../common/cinput";
import NumberInput from "../ngo-registration/NumberInput";

function ProjectManagerData({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("dashboard");

  return (
    <>
      <h5 className="py-4 px-4 md:px-0 mt-4">{t("Project Manager Profile")}</h5>
      <div className="flex flex-col md:flex-row w-full justify-between gap-4 px-4 md:px-0">
        <CInput
          isRequired
          formik={formik}
          label="Name"
          name="projectManagerName"
          page="dashboard"
        />
        <CInput
          isRequired
          formik={formik}
          label="Email"
          name="projectManagerEmail"
          page="dashboard"
          type="email"
        />
        <NumberInput
          isRequired
          formik={formik}
          label="Phone"
          name="projectManagerPhone"
          page="dashboard"
        />
      </div>
      <CInput
        isRequired
        className="mt-4"
        formik={formik}
        label="Colleagues and Stakeholders(Local Institutions,Researchers,Indigenous communities,Cultural Organizations)"
        name="colleaguesAndStakeholders"
        page="dashboard"
        type="phone"
      />
    </>
  );
}

export default ProjectManagerData;
