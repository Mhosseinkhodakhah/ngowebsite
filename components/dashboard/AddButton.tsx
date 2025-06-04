"use client";

import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { useRouter } from "@/i18n/navigation";

function AddButton() {
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
        className={`text-gray  rounded-full hidden lg:flex w-max items-center gap-2 px-10`}
        color="primary"
        endContent={
          <Icon height="20" icon="qlementine-icons:plus-16" width="20" />
        }
        variant="shadow"
        onPress={handlePress}
      >
        {pathname.includes("projects")
          ? t("Add Project")
          : pathname.includes("documents")
            ? t("Add Documents")
            : ""}
      </Button>
    </Tooltip>
  );
}

export default AddButton;
