"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

import GalleryIcon from "../common/icons/gallery-icon";

function UploadDocumentsSection() {
  const [docList, setDocList] = useState<{ name: string; url: string }[]>([]);

  const t = useTranslations("ngo-registration");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    let files: { name: string; url: string }[] = [];

    acceptedFiles.forEach((file: File) => {
      files.push({ name: file.name, url: URL.createObjectURL(file as Blob) });
    });

    setDocList(files);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <section className="flex gap-4 flex-col md:flex-row md:justify-around justify-center items-center h-full px-4 md:px-0 mt-10">
      <div className="flex-col w-full md:w-2/3 ">
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
        <ul className="my-4 px-4 text-start grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 j">
          {docList.map((doc) => (
            <li key={doc.url} className="my-2 md:mx-auto relative py-4">
              <Image
                alt="document"
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
                height={100}
                src={doc.url}
                width={100}
              />
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

export default UploadDocumentsSection;
