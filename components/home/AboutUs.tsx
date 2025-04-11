"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import AboutUsBtn from "./AboutUsBtn";

import AboutUs1 from "@/public/images/about-us-1.jpg";
import AboutUs2 from "@/public/images/about-us-2.jpg";

function AboutUs({ data }: { data: any }) {
  const t = useTranslations("navbar");
  const { locale } = useParams();

  return (
    <div className="flex flex-col justify-center items-center md:items-start md:flex-row gap-20 mt-32">
      <div className="flex flex-col items-center md:items-center order-1  flex-1">
        <h1 className="text-xl font-bold border-b-5 border-primary inline">
          {t("About Us")}
        </h1>
        <p className="mt-5 max-w-md  text-secondary dark:text-gray font-light px-4 md:px-0 text-center md:text-start">
          {locale === "pe"
            ? data?.peAboutUsDescription
            : locale === "en"
              ? data?.enAboutUsDescription
              : data?.ruAboutUsDescription}
        </p>
        <AboutUsBtn />
      </div>
      <div className="flex-1 relative order-2  ">
        <Image
          alt="about us"
          className="w-[300px]"
          height={100}
          src={AboutUs2}
          width={100}
        />
        <Image
          alt="about us"
          className="w-[250px] border-5 border-primary relative start-5 "
          height={100}
          src={AboutUs1}
          width={100}
        />
      </div>
    </div>
  );
}

export default AboutUs;
