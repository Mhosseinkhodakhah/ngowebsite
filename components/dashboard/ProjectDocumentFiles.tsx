"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";
import { useRef } from "react";

function ProjectDocumentFiles({
  className,
  multiple,
}: {
  className?: string;
  multiple: boolean;
}) {
  const t = useTranslations("dashboard");
  const ref = useRef<HTMLInputElement>(null);

  const handlePress = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <Input className={className} label={t("Title")} />
      <Input ref={ref} multiple={multiple} className="hidden" type="file" />
      <Button className="text-gray" color="primary" onPress={handlePress}>
        {t("Select File")}
      </Button>
    </div>
  );
}

export default ProjectDocumentFiles;
