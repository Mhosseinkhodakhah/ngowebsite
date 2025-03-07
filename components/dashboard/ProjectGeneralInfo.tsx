import { Textarea } from "@heroui/input";
import { useTranslations } from "next-intl";

import CInput from "../common/cinput";

import ProjectDatePicker from "./ProjectDatePicker";

function ProjectGeneralInfo() {
  const t = useTranslations("dashboard");

  return (
    <>
      <h5 className="py-4 px-4 md:px-0">{t("Project General Information")}</h5>
      <div className="flex flex-col md:flex-row w-full justify-between gap-4 px-4 md:px-0">
        <CInput isRequired label="Project Name" name="name" page="dashboard" />
        <ProjectDatePicker label="Start Date" />
        <ProjectDatePicker label="End Date" />
      </div>
      <div className="my-4">
        <Textarea
          isClearable
          isRequired
          className="h-40"
          label={t("Description")}
        />
      </div>
    </>
  );
}

export default ProjectGeneralInfo;
