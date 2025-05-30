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

      console.log("lllll", last);

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
    <div>
      {images?.length > 0 && (
        <>
          <ArchiveSlider data={images} />
          <Divider className="my-2" />
        </>
      )}
      {videos?.length > 0 && (
        <div className="mb-10">
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
        <div className="my-10">
          <div className="flex gap-2">
            {pdfs?.map((pdf: string) => (
              <Button
                key={pdf}
                //   className="flex border-1 rounded-md items-center p-2"
                startContent={
                  <Icon icon="material-icon-theme:pdf" width="24" height="24" />
                }
                variant="bordered"
              >
                <a href={pdf} target="_blank" rel="noreferrer" download>
                  {t("Download")}
                </a>
              </Button>
            ))}
          </div>
          <Divider className="my-2" />
        </div>
      )}
      {document?.length > 0 && (
        <div className="mb-10">
          <div className="flex gap-2">
            {document?.map((pdf: string) => (
              <Button
                key={pdf}
                //   className="flex border-1 rounded-md items-center p-2"
                startContent={
                  <Icon
                    icon="vscode-icons:file-type-word"
                    width="32"
                    height="32"
                  />
                }
                variant="bordered"
              >
                <a href={pdf} target="_blank" rel="noreferrer" download>
                  {t("Download")}
                </a>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DataArchiveFiles;
