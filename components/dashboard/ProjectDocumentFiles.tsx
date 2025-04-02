"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Tooltip } from "@heroui/tooltip";
import { Icon } from "@iconify/react";
import { FormikProps } from "formik";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChangeEvent, useRef } from "react";

function ProjectDocumentFiles({
  className,
  multiple,
  formik,
  name,
  onFile,
  index,
  visualDocuments,
}: {
  className?: string;
  multiple: boolean;
  formik: FormikProps<any>;
  name: string;
  onFile: (value: any) => void;
  index?: number;
  visualDocuments?: (File | undefined)[];
}) {
  const t = useTranslations("dashboard");
  const ref = useRef<HTMLInputElement>(null);

  const handlePress = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleSetFiles = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      if (multiple) {
        const files = Array.from(event.target.files).map((file: File) => file);

        const FilesUrl = files.map((file: File) => {
          return URL.createObjectURL(file);
        });

        formik.setFieldValue("documentsAndReportFiles", FilesUrl);
        onFile(files);
      } else {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);

        if (typeof index !== "undefined") {
          formik.setFieldValue(`visualDocuments[${index}]`, {
            title: formik.values[`visualDocuments${index + 1}`],
            files: [url],
          });
        }

        if (visualDocuments && index !== undefined) {
          visualDocuments[index] = file;

          onFile(visualDocuments);
        }
      }
    }
  };

  const handleDeleteFile = (i: number) => {
    if (visualDocuments && typeof index !== "undefined") {
      // let filter = visualDocuments.findIndex(() => index );

      // filter = undefined;

      visualDocuments[i] = undefined;

      const cpVisualDocuments = [...formik.values.visualDocuments];

      let findItem = cpVisualDocuments.find(
        (f, idx) => f.title === formik.values.visualDocuments[i]?.title
      );

      findItem.files = [];

      formik.setFieldValue("visualDocuments", cpVisualDocuments);

      onFile(visualDocuments);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-4 items-center justify-start w-full">
        <Input
          isRequired
          className={className}
          errorMessage={() => {
            if (formik.errors[name]) {
              return t(formik.errors[name]);
            }
          }}
          isInvalid={formik.errors[name] ? true : false}
          label={t("Title")}
          {...formik.getFieldProps(name)}
        />
        <Input
          ref={ref}
          accept={multiple ? "*" : "image/*"}
          className="hidden"
          multiple={multiple}
          type="file"
          onChange={handleSetFiles}
        />
        <Button className="text-gray" color="primary" onPress={handlePress}>
          {t("Select File")}
        </Button>
      </div>

      {typeof index !== "undefined" &&
        formik.values.visualDocuments[index]?.files[0] && (
          <div className="relative w-full my-4 flex">
            <Image
              alt="Document"
              className="object-contain"
              height={200}
              src={formik.values.visualDocuments[index]?.files[0]}
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
        )}
    </div>
  );
}

export default ProjectDocumentFiles;
