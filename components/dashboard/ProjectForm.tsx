import { useTranslations } from "next-intl";

import CInput from "../common/cinput";

import FormButtons from "./FormButtons";
import ProjectGeneralInfo from "./ProjectGeneralInfo";
import ProjectStatus from "./ProjectStatus";
import ProjectManagerData from "./ProjectManagerData";
import ProjectTarget from "./ProjectTarget";
import ProjectFiles from "./ProjectFiles";
import ProjectCountry from "./ProjectCountry";

function ProjectForm() {
  const t = useTranslations("dashboard");

  return (
    <form>
      <ProjectGeneralInfo />
      <ProjectStatus />

      <h5 className="py-4 px-4 md:px-0 mt-4">{t("Geographical location")}</h5>
      <div className="flex gap-4">
        <ProjectCountry />
        <CInput isRequired label="City" name="city" />
      </div>

      <h5 className="py-4 px-4 md:px-0 mt-4">
        {t("Implementer and Stakeholders")}
      </h5>
      <CInput
        isRequired
        className="md:w-2/3"
        label="Organization Name / Executive Entity"
        name="organizationName"
        page="dashboard"
      />
      <ProjectManagerData />

      <ProjectTarget />
      <ProjectFiles />
      <h5 className="py-4 px-4 md:px-0 mt-4">{t("More Information")}</h5>
      <CInput
        isRequired={false}
        label="Link for additional information"
        name="additionalInfo"
        page="dashboard"
      />
      <div className="my-10">
        <FormButtons />
      </div>
    </form>
  );
}

export default ProjectForm;
