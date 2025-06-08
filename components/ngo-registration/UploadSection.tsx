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

interface HandleSetLogoEvent extends React.ChangeEvent<HTMLInputElement> {}

interface Props {
  onLogo: (formData: FormData) => void;
  onDocumentsFile: (formData: FormData) => void;
}

function UploadSection({ onLogo, onDocumentsFile }: Props) {
  const [logo, setLogo] = useState<string>("");
  const [docList, setDocList] = useState<{ name: string; url: string }[]>([]);

  const t = useTranslations("ngo-registration");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    let files: { name: string; url: string }[] = [];
    const formData = new FormData();

    acceptedFiles.forEach((file: File) => {
      files.push({ name: file.name, url: URL.createObjectURL(file as Blob) });
      formData.append("picture", file);
    });

    onDocumentsFile(formData);
    setDocList(files);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      // "image/jpeg": [".jpg", ".jpeg"],
      // "image/png": [".png"],
      "application/pdf": [".pdf"],
    },
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
          {docList.map((doc) => (
            <li key={doc.url} className="my-2 md:mx-auto relative py-4">
              <PdfIcon />
              {doc.name}
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
        </ul>
      </div>
    </section>
  );
}

export default UploadSection;
