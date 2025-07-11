"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import useStore from "@/store";
import { Link } from "@/i18n/navigation";

interface HeroProps {
  data: any;
}

function Hero({ data }: HeroProps) {
  const t = useTranslations("homePage");
  const { locale } = useParams();
  const isLogin = useStore((state: any) => state.isLogin);

  return (
    <section className="flex justify-center relative">
      <Swiper
        loop
        autoplay={{
          delay: 5000,
        }}
        className="w-full absolute -top-12"
        modules={[Autoplay]}
      >
        {data?.mainImages?.map((image: string, index: number) => (
          <SwiperSlide
            key={index}
            className="md:h-screen md:object-fill l flex justify-center items-center"
          >
            <Image
              alt="hero image"
              className="object-center w-full md:h-svh  md:object-fill h-[50vh]"
              height={1024}
              src={image}
              width={1024}
            />
          </SwiperSlide>
        ))}
        <div
          className="w-full bottom-10 z-10 bg-transparent backdrop-blur-none absolute flex justify-center lg:h-auto h-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="bg-gray dark:bg-secondary backdrop-blur-md p-4 rounded-md flex justify-center items-center flex-col opacity-80 max-w-lg  md:w-auto">
            <p className="text-dark dark:text-gray text-center font-light text-[10px] lg:text-sm lg:font-medium">
              {locale === "pe"
                ? data?.peDescription
                : locale === "en"
                  ? data?.enDescription
                  : data?.ruDescription}
            </p>
            {!isLogin && (
              <Link href="/ngo/ngos-registration">
                <Button
                  className="lg:mt-4  mt-2 text-gray h-8"
                  color="primary"
                  variant="shadow"
                >
                  {t("Join Us")}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Swiper>
    </section>
  );
}

export default Hero;
