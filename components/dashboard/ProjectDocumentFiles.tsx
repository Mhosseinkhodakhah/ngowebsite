"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { FormikProps } from "formik";
import { useTranslations } from "next-intl";
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
  onFile: (value: FormData | File[]) => void;
  index?: number;
  visualDocuments?: File[];
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

        onFile(files);
      } else {
        const file = event.target.files[0];

        if (visualDocuments && typeof index !== "undefined") {
          const cpVisualDocuments = [...visualDocuments];

          cpVisualDocuments[index] = file;
          onFile(cpVisualDocuments);
        }
      }
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <Input
        className={className}
        label={t("Title")}
        {...formik.getFieldProps(name)}
      />
      <Input
        ref={ref}
        className="hidden"
        multiple={multiple}
        type="file"
        onChange={handleSetFiles}
      />
      <Button className="text-gray" color="primary" onPress={handlePress}>
        {t("Select File")}
      </Button>
    </div>
  );
}

export default ProjectDocumentFiles;
