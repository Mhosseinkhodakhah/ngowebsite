import { useTranslations } from "next-intl";
import { FormikProps } from "formik";
import Image from "next/image";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

import ProjectDocumentFiles from "./ProjectDocumentFiles";

function ProjectFiles({
  formik,
  onFiles,
  files,
  visualDocuments,
  onSingleFile,
}: {
  formik: FormikProps<any>;
  onFiles: (value: any) => void;
  files: [];
  visualDocuments: (File | undefined)[];
  onSingleFile: (value: any) => void;
}) {
  const t = useTranslations("dashboard");

  const handleDeleteFile = (index: number) => {
    const filterFormik = formik.values.documentsAndReportFiles.filter(
      (f: string, i: number) => i !== index
    );

    const filterFiles = files.filter((f, i) => i !== index);

    onFiles(filterFiles);
    formik.setFieldValue("documentsAndReportFiles", filterFormik);
  };

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
      {files && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 my-4">
          {formik.values.documentsAndReportFiles.map(
            (file: string, index: number) => (
              <div key={index} className="relative mt-10 z-10">
                <Image
                  alt="Document"
                  className="object-contain w-auto h-auto"
                  height={200}
                  src={file}
                  width={200}
                />
                <div className="absolute -top-5 -right-5">
                  <Tooltip content={t("Delete")}>
                    <Button
                      isIconOnly
                      color="danger"
                      size="sm"
                      onPress={() => handleDeleteFile(index)}
                    >
                      <Icon
                        height="24"
                        icon="material-symbols:delete-rounded"
                        width="24"
                      />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            )
          )}
        </div>
      )}

      <h5 className="py-4 px-4 md:px-0 mt-4">{t("Visual documents")}</h5>
      <div className="grid xl:grid-cols-2  grid-cols-1 gap-4">
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
