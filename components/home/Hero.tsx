"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "@/i18n/navigation";
import useStore from "@/store";

import "swiper/css";
import { Autoplay } from "swiper/modules";

interface HeroProps {
  data: any;
  footer: any;
}

function Hero({ data, footer }: HeroProps) {
  const t = useTranslations("homePage");
  const { locale } = useParams();

  const setFooter = useStore((state: any) => state.setFooter);

  const { mainImages, peDescription, enDescription, ruDescription } = data;

  console.log(mainImages);

  useEffect(() => {
    setFooter(footer.data);
  }, []);

  return (
    <section className="h-screen flex justify-center">
      <Swiper
        loop
        autoplay={{
          delay: 3000,
        }}
        className="w-full h-screen relative"
        modules={[Autoplay]}
      >
        {mainImages?.map((image: string, index: number) => (
          <SwiperSlide
            key={index}
            className="md:h-screen md:object-fill l flex justify-center items-center"
          >
            <Image
              alt="hero image"
              className="object-cover w-full h-full md:h-screen md:object-fill "
              height={800}
              src={image}
              width={800}
            />

            <div className="w-full bottom-10 md:bottom-24 bg-transparent backdrop-blur-none absolute flex justify-center ">
              <div className="bg-gray dark:bg-secondary backdrop-blur-md p-4 rounded-md flex justify-center items-center flex-col opacity-80 max-w-lg ">
                <p className="text-dark dark:text-gray text-start">
                  {locale === "pe"
                    ? peDescription
                    : locale === "en"
                      ? enDescription
                      : ruDescription}
                </p>
                <Link href="/ngo/ngos-registeration">
                  <Button
                    className="mt-4 text-gray"
                    color="primary"
                    variant="shadow"
                  >
                    {t("Join Us")}
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
