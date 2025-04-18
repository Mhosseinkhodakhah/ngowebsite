"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import useStore from "@/store";

interface HeroProps {
  data: any;
  footer: any;
}

function Hero({ data, footer }: HeroProps) {
  const t = useTranslations("homePage");
  const { locale } = useParams();

  const setFooter = useStore((state: any) => state.setFooter);

  const { mainImages, peDescription, enDescription, ruDescription } = data;

  useEffect(() => {
    setFooter(footer.data);
  }, []);

  return (
    <section className="h-screen flex justify-center">
      <Image
        alt="hero image"
        className="object-cover md:h-screen md:object-fill md:absolute left-0 right-0 top-0 w-full h-full"
        height={800}
        src={mainImages.length > 0 ? mainImages[0] : ""}
        width={800}
      />
      <div className="absolute mx-4 md:w-[500px] bottom-10 md:bottom-24 bg-gray dark:bg-secondary p-4 rounded-md flex justify-center items-center flex-col opacity-80 backdrop-blur-md">
        <p className="text-dark dark:text-gray text-start">
          {locale === "pe"
            ? peDescription
            : locale === "en"
              ? enDescription
              : ruDescription}
        </p>
        <Link href="/ngo/ngos-registeration">
          <Button className="mt-4 text-gray" color="primary" variant="shadow">
            {t("Join Us")}
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
