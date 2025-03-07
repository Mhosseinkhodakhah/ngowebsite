import { useTranslations } from "next-intl";

import CInput from "../common/cinput";

function ProjectManagerData() {
  const t = useTranslations("dashboard");

  return (
    <>
      <h5 className="py-4 px-4 md:px-0 mt-4">{t("Project Manager Profile")}</h5>
      <div className="flex flex-col md:flex-row w-full justify-between gap-4 px-4 md:px-0">
        <CInput isRequired label="Name" name="name" page="dashboard" />
        <CInput
          isRequired
          label="Email"
          name="email"
          page="dashboard"
          type="email"
        />
        <CInput
          isRequired
          label="Phone"
          name="phone"
          page="dashboard"
          type="phone"
        />
      </div>
      <CInput
        isRequired
        className="mt-4"
        label="Colleagues and Stakeholders(Local Institutions,Researchers,Indigenous communities,Cultural Organizations)"
        name="phone"
        page="dashboard"
        type="phone"
      />
    </>
  );
}

export default ProjectManagerData;
