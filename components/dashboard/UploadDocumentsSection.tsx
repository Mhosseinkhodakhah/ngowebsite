"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

import GalleryIcon from "../common/icons/gallery-icon";

function UploadDocumentsSection({
  formik,
  onDocuments,
}: {
  formik?: any;
  onDocuments: (value: File[]) => void;
}) {
  const [docList, setDocList] = useState<
    { name: string; url: string; type: string }[]
  >([]);

  const t = useTranslations("ngo-registration");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    let files: { name: string; url: string; type: string }[] = [];
    const totalSize = acceptedFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > 10 * 1024 * 1024) {
      alert("Total size of all files exceeds 20MB");
      return;
    }
    acceptedFiles.forEach((file: File) => {
      if (
        file.type.includes("pdf") ||
        file.type.includes(
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) ||
        file.type.includes("application/msword")
      ) {
        if (file.type.includes("pdf")) {
          files.push({ name: file.name, url: "", type: "pdf" });
        }
        if (
          file.type.includes(
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ) ||
          file.type.includes("application/msword")
        ) {
          files.push({
            name: file.name,
            url: "",
            type: "doc",
          });
        }
      } else {
        if (
          file.type === "image/png" ||
          file.type === "image/jpg" ||
          file.type === "image/jpeg"
        ) {
          files.push({
            name: file.name,
            url: URL.createObjectURL(file as Blob),
            type: "image",
          });
        }
        if (
          file.type === "video/mp4" ||
          file.type === "video/mpeg" ||
          file.type === "video/mov"
        ) {
          files.push({
            name: file.name,
            url: URL.createObjectURL(file as Blob),
            type: "video",
          });
        }
      }
    });

    onDocuments(acceptedFiles);
    setDocList((prev) => [...prev, ...files]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "video/mp4": [".mp4"],
      "video/mpeg": [".mpeg"],
      "video/avi": [".avi"],
      "video/quicktime": [".mov"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 10 * 1024 * 1024, // 20MB in bytes
    // multiple: true,
    maxFiles: 5, // If you want to limit number of files
  });

  return (
    <section className="flex gap-4 flex-col md:flex-row md:justify-around justify-center items-center h-full px-4 md:px-0 mt-10">
      <div className="flex-col w-full">
        <div
          className="bg-gray dark:bg-secondary flex justify-center items-center p-10 rounded-md border border-dashed "
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <div>
              <GalleryIcon />
              <p>{t("Drop the files here")}</p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
              <GalleryIcon />
              <p>{t("Upload Document")}</p>
            </div>
          )}
        </div>

        <ul className="list-disc p-4">
          <li className="text-[10px] text-danger text-light">
            {t("Maximum selected files: 5")}
          </li>
          <li className="text-[10px] text-danger text-light">
            {t("Acceptable formats DOCS")}
          </li>
          <li className="text-[10px] text-danger text-light">
            {t("The size of the selected files must be less than 20 MB")}
          </li>
        </ul>

        <ul className="my-4 px-4 text-start grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 j">
          {docList.map((doc, index) => (
            <li key={index} className="my-2 md:mx-auto relative py-4">
              {doc.type === "pdf" || doc.type === "doc" ? (
                <div className="flex flex-col items-center gap-2">
                  {doc.type === "pdf" && (
                    <Icon
                      height="50"
                      icon="material-icon-theme:pdf"
                      width="50"
                    />
                  )}
                  {doc.type === "doc" && (
                    <Icon
                      height="50"
                      icon="vscode-icons:file-type-word"
                      width="50"
                    />
                  )}
                </div>
              ) : (
                <>
                  {doc.type === "image" && (
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        alt="document"
                        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
                        height={100}
                        src={doc.url}
                        width={100}
                      />
                    </div>
                  )}
                  {doc.type === "video" && (
                    <div className="flex flex-col items-center gap-2">
                      <video
                        controls
                        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
                        height={100}
                        src={doc.url}
                        width={100}
                      >
                        <track
                          default
                          kind="captions"
                          label="English"
                          src="captions.vtt"
                          srcLang="en"
                        />
                      </video>
                    </div>
                  )}
                </>
              )}
              <Tooltip content={t("Delete")}>
                <Button
                  isIconOnly
                  className="absolute -top-2 right-1 cursor-pointer "
                  color="danger"
                  onPress={() => {
                    const cpDocList = [...docList];
                    const filter = cpDocList.filter((f) => f.url !== doc.url);

                    setDocList(filter);
                  }}
                >
                  <Icon height="24" icon="uim:times-circle" width="24" />
                </Button>
              </Tooltip>
            </li>
          ))}
          {formik?.values.file?.map((doc: string) => (
            <li key={doc} className="my-2 md:mx-auto relative py-4">
              {doc.slice(-3) === "png" ||
              doc.slice(-3) === "jpg" ||
              doc.slice(-4) === "jpeg" ? (
                <div className="flex flex-col items-center gap-2">
                  <Image
                    alt="document"
                    className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
                    height={100}
                    src={doc}
                    width={100}
                  />
                </div>
              ) : (
                <>
                  {doc.slice(-3) === "pdf" && (
                    <div className="flex flex-col items-center gap-2 p-10">
                      <Icon
                        height="50"
                        icon="material-icon-theme:pdf"
                        width="50"
                      />
                    </div>
                  )}
                  {doc.slice(-4) === "docx" && (
                    <div className="flex flex-col items-center gap-2 p-10">
                      <Icon
                        height="50"
                        icon="vscode-icons:file-type-word"
                        width="50"
                      />
                    </div>
                  )}
                </>
              )}

              <Tooltip content={t("Delete")}>
                <Button
                  isIconOnly
                  className="absolute -top-2 right-1 cursor-pointer "
                  color="danger"
                  onPress={() => {
                    const cpFiles = [...formik.values.file];

                    const filter = cpFiles.filter((f) => f !== doc);

                    formik.setFieldValue("file", filter);
                  }}
                >
                  <Icon height="24" icon="uim:times-circle" width="24" />
                </Button>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UploadDocumentsSection;
