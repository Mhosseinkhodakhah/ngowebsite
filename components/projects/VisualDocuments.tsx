"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SwiperSlide } from "swiper/react";

import Slider from "../common/slider";
import { useState } from "react";
import ModalImage from "../common/modal";

function VisualDocuments({ data }: { data: any }) {
  const t = useTranslations("projects");

  const [src, setSrc] = useState<string>("");

  const handleCloseModal = () => setSrc("");

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20 mb-10">
        {t("Visual Documents")}
      </h1>
      <div className="w-full px-8 h-[400px] max-w-screen-lg  flex flex-col justify-center items-start">
        <Slider single={1}>
          {data?.visualDocuments?.map((item: any, index: number) => (
            <SwiperSlide
              key={index}
              className="p-4"
              onClick={() => setSrc(item?.files[0])}
            >
              <Image
                alt="Visual Document"
                className="w-[50%] md:w-full object-contain mx-auto"
                height={800}
                src={item.files[0]}
                width={800}
              />
              <h2 className="text-center my-4">{item.title}</h2>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <ModalImage isOpen={!!src} src={src} onClose={handleCloseModal} />
    </section>
  );
}

export default VisualDocuments;
