"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Tooltip } from "@heroui/tooltip";

// import GalleryIcon from "../common/icons/gallery-icon";
import PdfIcon from "../common/icons/pdf-icon";
import { addToast } from "@heroui/toast";
import convertBlobToFile from "@/utils/convertBlobToFile";
import { get } from "http";

interface HandleSetLogoEvent extends React.ChangeEvent<HTMLInputElement> {}

interface Props {
  documents: [];
  onLogo: (formData: FormData) => void;
  onDocumentsFile: (value: []) => void;
}

function UploadSection({ documents, onLogo, onDocumentsFile }: Props) {
  const [logo, setLogo] = useState<string>("");

  const t = useTranslations("ngo-registration");

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files

      if (
        acceptedFiles.length > 3 ||
        documents.length + 1 > 3 ||
        documents.length + acceptedFiles.length > 3
      ) {
        addToast({
          title: "File Limitation",
          description: t("The number of selected files cannot exceed 4"),
          timeout: 3000,
          shouldShowTimeoutProgress: true,
          color: "danger",
          variant: "flat",
        });

        return;
      }

      const totalSize = acceptedFiles.reduce((sum, file) => sum + file.size, 0);

      if (totalSize > 10 * 1024 * 1024) {
        addToast({
          title: "File Limitation",
          description: t("File Size is Too Much"),
          timeout: 3000,
          color: "danger",
          variant: "flat",
          shouldShowTimeoutProgress: true,
        });

        return;
      }

      acceptedFiles.forEach((file: File) => {
        if (documents.length > 3) {
          addToast({
            title: t("File Limitation"),
            description: t("The number of selected files cannot exceed 3"),
            timeout: 3000,
            shouldShowTimeoutProgress: true,
            color: "danger",
            variant: "flat",
          });

          return;
        } else {
          onDocumentsFile((prev) => [...prev, file]);
        }
      });
    },
    [documents]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      // "image/jpeg": [".jpg", ".jpeg"],
      // "image/png": [".png"],
      "application/pdf": [".pdf"],
    },
    maxSize: 20 * 1024 * 1024, // 20MB in bytes
    // multiple: true,
    // maxFile s: 3, // If you want to limit number of files
  });

  const logoRef = useRef<HTMLInputElement>(null);

  const handleSetLogo = (e: HandleSetLogoEvent): void => {
    if (e.target.files) {
      const file = e.target.files[0];
      const formData = new FormData();

      formData.append("picture", file);
      onLogo(formData);

      if (file) {
        const url: string = URL.createObjectURL(file as Blob);

        setLogo(url);
      }
    }
  };

  return (
    <section className="flex gap-4 flex-col md:flex-row md:justify-around justify-center items-center md:items-start h-full px-4 md:px-0">
      <div className="flex flex-col justify-center items-center gap-10">
        <Avatar className="w-32 h-32" name={t("Logo")} src={logo} />
        <input
          ref={logoRef}
          accept=".jpg,.jpeg,.png"
          className="hidden"
          type="file"
          onChange={handleSetLogo}
        />
        <div className="flex gap-2">
          <Button
            className="text-gray px-2"
            color="primary"
            onPress={() => {
              logoRef.current?.click();
            }}
          >
            {t("Choose Logo")}
          </Button>
          {logo && (
            <Button
              className="text-gray px-2"
              color="danger"
              endContent={
                <Icon height="15" icon="fluent:delete-32-filled" width="15" />
              }
              onPress={() => {
                setLogo("");
                onLogo(new FormData());
              }}
            >
              {t("Delete")}
            </Button>
          )}
        </div>
      </div>

      <div className="flex-col w-full md:w-2/3 ">
        <div>
          <div
            className="bg-gray dark:bg-secondary flex justify-center items-center p-10 rounded-md border border-dashed "
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <div>
                <PdfIcon />
                <p>{t("Drop the files here")}</p>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-4">
                <PdfIcon />
                <p>{t("Upload Document")}</p>
              </div>
            )}
          </div>
          <ul className="list-disc p-4">
            <li className="text-[10px] text-danger text-light">
              {t("Maximum selected files: 5")}
            </li>
            <li className="text-[10px] text-danger text-light">
              {t("Acceptable formats PDF")}
            </li>
            <li className="text-[10px] text-danger text-light">
              {t("The size of the selected files must be less than 20 MB")}
            </li>
          </ul>
        </div>
        <ul className="my-4 px-4 text-start grid grid-cols-1 md:grid-cols-2">
          {documents?.map((doc: any) => (
            <li key={doc.name} className="my-2 md:mx-auto relative py-4">
              <PdfIcon />
              {doc.name}
              <Tooltip content={t("Delete")}>
                <Button
                  isIconOnly
                  className="absolute -top-2 right-1 cursor-pointer "
                  color="danger"
                  onPress={() => {
                    if (documents.length > 0) {
                      const getFiles: any = [...documents];
                      const filtered = getFiles.filter(
                        (f: any) => f.name !== doc.name
                      );

                      onDocumentsFile(filtered);
                    }
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

export default UploadSection;
