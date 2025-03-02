"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

function CenterSection() {
  const { locale } = useParams() as { locale: string };
  const t = useTranslations("navbar");

  return (
    <section className="text-gray flex md:justify-center">
      <ul className="p-4 grid grid-cols-2 md:grid-cols-1 md:mx-20 w-full">
        <li className="my-2 ">
          <Link href="/">{t("Home")}</Link>
        </li>
        <li className="my-2 ">
          <Link href={`/${locale}/about-us`}>{t("About Us")}</Link>
        </li>
        <li className="my-2 ">
          <Link href={`/${locale}/projects`}>{t("Projects")}</Link>
        </li>
        <li className="my-2 ">
          <Link href={`/${locale}/ngo`}>{t("NGO")}</Link>
        </li>
        <li className="my-2 ">
          <Link href={`/${locale}/education`}>{t("Education")}</Link>
        </li>
        <li className="my-2 ">
          <Link href={`/${locale}/events`}>{t("Events")}</Link>
        </li>
        <li className="my-2 ">
          <Link href={`/${locale}/data-archive`}>{t("Data Archive")}</Link>
        </li>
      </ul>
    </section>
  );
}

export default CenterSection;
