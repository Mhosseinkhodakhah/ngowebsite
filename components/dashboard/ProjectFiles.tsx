import { useTranslations } from "next-intl";

import ProjectDocumentFiles from "./ProjectDocumentFiles";

function ProjectFiles() {
  const t = useTranslations("dashboard");

  return (
    <>
      <h5 className="py-4 px-4 md:px-0 mt-4">{t("Documents and Reports")}</h5>
      <ProjectDocumentFiles multiple className="md:w-1/3" />
      <h5 className="py-4 px-4 md:px-0 mt-4">{t("Visual documents")}</h5>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-4">
        <ProjectDocumentFiles className="md:w-2/3" multiple={false} />
        <ProjectDocumentFiles className="md:w-2/3" multiple={false} />
        <ProjectDocumentFiles className="md:w-2/3" multiple={false} />
        <ProjectDocumentFiles className="md:w-2/3" multiple={false} />
      </div>
    </>
  );
}

export default ProjectFiles;
