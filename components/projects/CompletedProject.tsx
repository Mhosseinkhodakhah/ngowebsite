"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import Slider from "../common/slider";
import ModalImage from "../common/modal";

import AchievementsImg from "@/public/images/achivement.png";
import Placeholder from "@/public/images/placeholder.png";

function CompletedProject({ data }: { data: any }) {
  const [src, setSrc] = useState<string>("");
  const t = useTranslations("projects");

  const handleCloseModal = () => setSrc("");

  console.log("vvv", data?.visualDocuments);

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-xl w-full px-6">
      <div className="w-full px-8 h-[400px] max-w-screen-lg  flex flex-col justify-center items-start">
        <h2 className="text-center my-4">{data?.documentsAndReport?.title}</h2>
        <Slider single={data?.documentsAndReport?.files?.length}>
          {data?.documentsAndReport?.files?.map((item: string) => (
            <SwiperSlide
              key={item}
              className="p-4"
              onClick={() => setSrc(item)}
            >
              <Image
                alt="Visual Document"
                className="w-full mx-auto h-full object-contain"
                height={800}
                src={item || Placeholder}
                width={800}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20 text-center break-words">
        {t("Achievements and Results")}
      </h1>
      <Image
        alt="Achievements and Results"
        className="w-[300px] h-[300px] my-10"
        height={800}
        src={AchievementsImg}
        width={800}
      />

      <p className="w-full lg:max-w-2xl text-justify break-words">
        {data?.completedAchievements}
      </p>
      <h1 className="text-xl font-bold border-b-5 border-primary my-20 text-center">
        {t("Reports and Documentation")}
      </h1>
      <p className="max-w-2xl  break-words text-justify">
        {data?.completedReports}
      </p>

      {/* اینجا باید اسلایدر بزاری */}
      <div className="w-full px-8 h-[400px] max-w-screen-lg  flex flex-col justify-center items-start">
        <Slider single={data?.visualDocuments?.length}>
          {data?.visualDocuments?.map((item: any, index: number) => (
            <SwiperSlide
              key={index}
              className="p-4"
              onClick={() => setSrc(item?.files[0])}
            >
              <Image
                alt="Visual Document"
                className="w-full mx-auto h-full object-contain"
                height={800}
                src={item?.files ? item?.files[0] : Placeholder}
                width={800}
              />
              <h2 className="text-center my-4">{item?.title}</h2>
            </SwiperSlide>
          ))}
        </Slider>
      </div>

      <h1 className="text-xl font-bold border-b-5 border-primary my-20 text-center">
        {t("impact on the protection of intangible heritage")}
      </h1>
      <p className="max-w-2xl text-justify">{data?.completedEffects}</p>
      <ModalImage isOpen={!!src} src={src} onClose={handleCloseModal} />
    </div>
  );
}

export default CompletedProject;
