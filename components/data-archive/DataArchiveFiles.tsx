"use client";

import { useMemo } from "react";
import ArchiveSlider from "./ArchiveSlider";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Divider } from "@heroui/divider";

function DataArchiveFiles({ data }: { data: any }) {
  const t = useTranslations("common");

  const images = useMemo(() => {
    const getImages = data?.file?.filter((file: string) => {
      const isArr = file.split(".");
      const last = isArr[isArr.length - 1];

      if (
        last === "png" ||
        last === "jpg" ||
        last === "jpeg" ||
        last === "webp"
      ) {
        return file;
      }
    });

    return getImages;
  }, [data]);

  const videos = useMemo(() => {
    const getImages = data?.file?.filter((file: string) => {
      const isArr = file.split(".");
      const last = isArr[isArr.length - 1];

      if (last === "mp4" || last === "mpeg" || last === "mov") {
        return file;
      }
    });

    return getImages;
  }, [data]);

  const pdfs = useMemo(() => {
    const getImages = data?.file?.filter((file: string) => {
      const isArr = file.split(".");
      const last = isArr[isArr.length - 1];

      if (last === "pdf") {
        return file;
      }
    });

    return getImages;
  }, [data]);

  const document = useMemo(() => {
    const getImages = data?.file?.filter((file: string) => {
      const isArr = file.split(".");
      const last = isArr[isArr.length - 1];

      if (last === "docx") {
        return file;
      }
    });

    return getImages;
  }, [data]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {images?.length > 0 && (
        <div className="flex justify-center flex-col items-center">
          <ArchiveSlider data={images} />
          <Divider className="my-2" />
        </div>
      )}
      {videos?.length > 0 && (
        <div className="mb-10 flex justify-center flex-col items-center">
          {videos?.map((video: string) => (
            <>
              <video controls key={video} src={video}>
                <track kind="captions" srcLang="en" />
              </video>
              <br />
            </>
          ))}
          <Divider className="my-2" />
        </div>
      )}
      {pdfs?.length > 0 && (
        <div className="my-10 flex justify-center flex-col items-center w-full">
          <div className="flex gap-2 w-full ">
            {pdfs?.map((pdf: string) => (
              <div
                key={pdf}
                className="w-full flex flex-col justify-center items-center gap-2"
              >
                <object
                  aria-label="Document preview"
                  className="w-full h-[600px]"
                  data={pdf}
                  type="application/pdf"
                />
              </div>
            ))}
          </div>
          <Divider className="my-2" />
        </div>
      )}
      {document?.length > 0 && (
        <div className="mb-10 flex justify-start flex-col items-start">
          <div className="flex gap-2">
            {document?.map((pdf: string) => (
              <div
                key={pdf}
                className="w-full flex flex-col justify-start items-start gap-2"
              >
                <a href={pdf} target="_blank" rel="noreferrer" download>
                  <Button
                    key={pdf}
                    className="flex border-1 rounded-md items-center p-2"
                    startContent={
                      <Icon
                        icon="vscode-icons:file-type-word"
                        width="32"
                        height="32"
                      />
                    }
                    variant="bordered"
                  >
                    {t("Download")}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DataArchiveFiles;
