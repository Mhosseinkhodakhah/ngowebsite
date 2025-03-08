"use client";

import { useRouter } from "@/i18n/navigation";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";

function AddButton() {
  const { locale } = useParams();
  const pathname = usePathname();
  const t = useTranslations("dashboard");
  const router = useRouter();

  const handlePress = () => {
    if (pathname.includes("projects")) {
      router.push("/dashboard/projects/add-project");
    } else if (pathname.includes("documents")) {
      router.push("/dashboard/documents/add-document");
    }
  };

  return (
    <Tooltip
      content={
        pathname.includes("projects")
          ? t("Add Project")
          : pathname.includes("documents")
            ? t("Add Documents")
            : ""
      }
    >
      <Button
        isIconOnly
        className={`text-gray fixed ${locale === "pe" ? "left-10" : "right-10"} bottom-10 rounded-full z-10 hidden md:flex`}
        color="primary"
        variant="shadow"
        onPress={handlePress}
      >
        <Icon height="16" icon="qlementine-icons:plus-16" width="16" />
      </Button>
    </Tooltip>
  );
}

export default AddButton;
