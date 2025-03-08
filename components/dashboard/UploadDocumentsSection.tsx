"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";

import GalleryIcon from "../common/icons/gallery-icon";

function UploadDocumentsSection() {
  const [docList, setDocList] = useState<string[]>([]);

  const t = useTranslations("ngo-registration");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    let files: string[] = [];

    acceptedFiles.forEach((file: File) => {
      files.push(file.name);
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
          {docList.map((doc, index) => (
            <li className="my-2 md:mx-auto" key={index}>
              {doc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UploadDocumentsSection;
