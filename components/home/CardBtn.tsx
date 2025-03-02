"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

import { useRouter } from "@/i18n/navigation";

function CardBtn() {
  const t = useTranslations("homePage");
  const router = useRouter();

  const handlePressed = () => {
    router.push("/projects");
  };

  return (
    <Button
      className="text-gray w-full md:w-1/3"
      color="primary"
      size="sm"
      variant="shadow"
      onPress={handlePressed}
    >
      {t("Read More")}
    </Button>
  );
}

export default CardBtn;
