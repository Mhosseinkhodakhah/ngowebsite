"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import Slider from "../common/slider";
import Title from "../common/title";

function NgoActivitiesSlider({ data }: { data: any }) {
  return (
    <section className="w-full flex flex-col justify-center items-center my-14">
      <Title page="NGOPage" titleText="Documents" />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20 h-[400px] items-center">
        <Slider single={3}>
          {data?.documentsFile?.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <Image
                alt="ngo activities"
                className="w-full object-contain"
                height={100}
                src={image}
                width={100}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default NgoActivitiesSlider;
