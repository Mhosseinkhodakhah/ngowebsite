"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";

import Slider from "../common/slider";
import Title from "../common/title";
import ModalImage from "../common/modal";

function NgoActivitiesSlider({ data }: { data: any }) {
  const [src, setSrc] = useState<string>("");
  const handleCloseModal = () => setSrc("");

  return (
    <section className="w-full flex flex-col justify-center items-center my-14">
      <Title page="NGOPage" titleText="Documents" />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20 h-[400px] items-center">
        <Slider single={3}>
          {data?.documentsFile?.map((image: string, index: number) => (
            <SwiperSlide key={index} onClick={() => setSrc(image)}>
              <Image
                alt="ngo activities"
                className="w-full object-contain"
                height={500}
                src={image}
                width={500}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <ModalImage isOpen={!!src} src={src} onClose={handleCloseModal} />
    </section>
  );
}

export default NgoActivitiesSlider;
