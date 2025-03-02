"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useTranslations } from "use-intl";

function RightSection() {
  const t = useTranslations("footer");

  return (
    <section className="flex gap-2 flex-col justify-start items-start h-full mt-10">
      <h2 className="text-2xl font-bold text-gray">{t("Get Updates")}</h2>
      <Input className="max-w-xs" placeholder={t("Enter your email")} />
      <Button className="text-gray px-2" color="secondary">
        {t("Submit")}
      </Button>
    </section>
  );
}

export default RightSection;
