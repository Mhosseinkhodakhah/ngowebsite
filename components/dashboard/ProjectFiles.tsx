import { useTranslations } from "next-intl";
import { FormikProps } from "formik";

import ProjectDocumentFiles from "./ProjectDocumentFiles";

function ProjectFiles({
  formik,
  onFiles,
  visualDocuments,
  onSingleFile,
}: {
  formik: FormikProps<any>;
  onFiles: (value: any) => void;
  visualDocuments: [];
  onSingleFile: (value: any) => void;
}) {
  const t = useTranslations("dashboard");

  return (
    <>
      <h5 className="py-4 px-4 md:px-0 mt-4">{t("Documents and Reports")}</h5>
      <ProjectDocumentFiles
        multiple
        className="md:w-1/3"
        formik={formik}
        name="documentsAndReportTitle"
        onFile={onFiles}
      />
      <h5 className="py-4 px-4 md:px-0 mt-4">{t("Visual documents")}</h5>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-4">
        <ProjectDocumentFiles
          className="md:w-2/3"
          formik={formik}
          index={0}
          multiple={false}
          name="visualDocuments1"
          visualDocuments={visualDocuments}
          onFile={onSingleFile}
        />
        <ProjectDocumentFiles
          className="md:w-2/3"
          formik={formik}
          index={1}
          multiple={false}
          name="visualDocuments2"
          visualDocuments={visualDocuments}
          onFile={onSingleFile}
        />
        <ProjectDocumentFiles
          className="md:w-2/3"
          formik={formik}
          index={2}
          multiple={false}
          name="visualDocuments3"
          visualDocuments={visualDocuments}
          onFile={onSingleFile}
        />
        <ProjectDocumentFiles
          className="md:w-2/3"
          formik={formik}
          index={3}
          multiple={false}
          name="visualDocuments4"
          visualDocuments={visualDocuments}
          onFile={onSingleFile}
        />
      </div>
    </>
  );
}

export default ProjectFiles;
