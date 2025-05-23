"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

import { useRouter } from "@/i18n/navigation";

function CardBtn({ status, id }: { status?: any[]; id: string }) {
  const t = useTranslations("common");
  const router = useRouter();

  const handlePressed = () => {
    if (status) {
      if (status?.includes("completed")) {
        router.push(`/projects/completed-projects/${id}`);
      } else {
        router.push(`/projects/${id}`);
      }
    } else {
      router.push(`/projects/${id}`);
    }
  };

  return (
    <Button
      className="mt-2 w-[20px] h-[40px] rounded-full hover:w-full group hover:animate-bottom-width"
      color="primary"
      size="sm"
      variant="bordered"
      onPress={handlePressed}
    >
      <Icon height="16" icon="formkit:arrowright" width="16" />
      <span className="hidden group-hover:block">{t("Read More")}</span>
    </Button>
  );
}

export default CardBtn;
