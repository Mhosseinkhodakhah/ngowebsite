"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SwiperSlide } from "swiper/react";

import Slider from "../common/slider";

function VisualDocuments({ data }: { data: any }) {
  const t = useTranslations("projects");

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20 mb-10">
        {t("Visual Documents")}
      </h1>
      <div className="w-full px-8 h-[400px] max-w-screen-lg  flex flex-col justify-center items-start">
        <Slider>
          {data?.visualDocuments?.map((item: any, index: number) => (
            <SwiperSlide key={index} className="p-4">
              <Image
                alt="Visual Document"
                className="w-[50%] md:w-full object-contain mx-auto"
                height={100}
                src={item.files[0]}
                width={100}
              />
              <h2 className="text-center my-4">{item.title}</h2>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default VisualDocuments;
