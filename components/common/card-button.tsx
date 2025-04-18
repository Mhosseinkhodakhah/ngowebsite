"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

import { useRouter } from "@/i18n/navigation";

function CardButton({ route, btnText }: { route: string; btnText?: string }) {
  const t = useTranslations("common");
  const router = useRouter();

  const handlePressed = () => {
    router.push(route);
  };

  return (
    <Button
      className="text-gray w-full mt-2"
      color="primary"
      size="sm"
      variant="shadow"
      onPress={handlePressed}
    >
      {btnText ? t(btnText) : t("Read More")}
    </Button>
  );
}

export default CardButton;
