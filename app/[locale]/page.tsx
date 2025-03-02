"use client";

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="light:text-dark dark:text-gray">
      <h1 className="">{t("title")}</h1>
    </div>
  );
}
