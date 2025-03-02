"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

import { useRouter } from "@/i18n/navigation";

function AboutUsBtn() {
  const t = useTranslations("homePage");
  const router = useRouter();

  const handleOnPress = () => {
    router.push("/about-us");
  };

  return (
    <Button
      className="text-gray mt-4"
      color="primary"
      variant="shadow"
      onPress={handleOnPress}
    >
      {t("More About Us")}
    </Button>
  );
}

export default AboutUsBtn;
