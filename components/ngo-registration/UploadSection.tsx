"use client";

import { useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";

import GalleryIcon from "../common/icons/gallery-icon";

interface HandleSetLogoEvent extends React.ChangeEvent<HTMLInputElement> {}

function UploadSection() {
  const [logo, setLogo] = useState<string>("");
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

  const logoRef = useRef<HTMLInputElement>(null);

  const handleSetLogo = (e: HandleSetLogoEvent): void => {
    if (e.target.files) {
      const file = e.target.files[0];

      if (file) {
        const url: string = URL.createObjectURL(file as Blob);

        setLogo(url);
      }
    }
  };

  return (
    <section className="flex gap-4 flex-col md:flex-row md:justify-around justify-center items-center h-full px-4 md:px-0">
      <div className="flex flex-col justify-center items-center gap-10">
        <Avatar className="w-32 h-32" name={t("Logo")} src={logo} />
        <input
          ref={logoRef}
          accept=".jpg,.jpeg,.png"
          className="hidden"
          type="file"
          onChange={handleSetLogo}
        />
        <Button
          className="text-gray px-2"
          color="primary"
          onPress={() => {
            logoRef.current?.click();
          }}
        >
          {t("Choose Logo")}
        </Button>
      </div>

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

export default UploadSection;
