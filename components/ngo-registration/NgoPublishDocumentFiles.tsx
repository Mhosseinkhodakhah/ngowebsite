"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Tooltip } from "@heroui/tooltip";

import GalleryIcon from "../common/icons/gallery-icon";
import { addToast } from "@heroui/toast";

interface Props {
  publishFile: FormData;
  onPublishFile: (formData: FormData) => void;
}

function NgoPublishDocumentFiles({ publishFile, onPublishFile }: Props) {
  const [publishList, setPublishList] = useState<
    { name: string; url: string }[]
  >([]);

  const t = useTranslations("ngo-registration");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    let files: { name: string; url: string }[] = [];

    const totalSize = acceptedFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > 5 * 1024 * 1024) {
      addToast({
        title: "File Limitation",
        description: t("File Size is Too Much"),
        timeout: 3000,
        shouldShowTimeoutProgress: true,
        color: "danger",
        variant: "flat",
      });
      return;
    }

    acceptedFiles.forEach((file: File) => {
      files.push({ name: file.name, url: URL.createObjectURL(file as Blob) });
      if (publishFile.getAll("picture").length + 1 > 3) {
        addToast({
          title: "File Limitation",
          description: t("The number of selected files cannot exceed 3"),
          timeout: 3000,
          shouldShowTimeoutProgress: true,
          color: "danger",
          variant: "flat",
        });
        return;
      }
      publishFile.append("picture", file);
    });

    onPublishFile(publishFile);
    setPublishList((prev) => [...prev, ...files]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: 20 * 1024 * 1024, // 20MB in bytes
    // multiple: true,
    maxFiles: 3, // If you want to limit number of files
  });

  return (
    <section className="flex gap-4 flex-col md:flex-row md:justify-around justify-center items-center md:items-start h-full px-4 md:px-0 mt-4">
      <div className="flex-col w-full  ">
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
              <p>{t("Upload Files")}</p>
            </div>
          )}
        </div>
        <ul className="list-disc p-4">
          <li className="text-[10px] text-danger text-light">
            {t("Maximum selected files: 5")}
          </li>
          <li className="text-[10px] text-danger text-light">
            {t("Acceptable formats JPG")}
          </li>
          <li className="text-[10px] text-danger text-light">
            {t("The size of the selected files must be less than 20 MB")}
          </li>
        </ul>
        <ul className="my-4 px-4 text-start grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {publishList.map((doc, index: number) => (
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
                    const cpDocList = [...publishList];
                    const filter = cpDocList.filter((f) => f.url !== doc.url);

                    const getformData = publishFile.getAll("picture");
                    const filtered = getformData.filter((f, i) => i !== index);
                    console.log("filterrrrr", filtered);
                    publishFile.delete("picture");

                    for (let i = 0; i < filtered.length; i++) {
                      publishFile.append("picture", filtered[i]);
                    }

                    setPublishList(filter);
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

export default NgoPublishDocumentFiles;
