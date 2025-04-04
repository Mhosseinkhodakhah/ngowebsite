"use client";

import { SwiperSlide } from "swiper/react";
import Image from "next/image";

import Slider from "../common/slider";

function ArchiveSlider({ data }: { data: string[] }) {
  return (
    <div className="mt-20 flex flex-col justify-center items-center max-w-screen-md">
      <Slider single={1}>
        {data?.map((image) => (
          <SwiperSlide
            key={image}
            className="w-full flex justify-center bg-orange-500"
          >
            <Image
              alt="Archive"
              className="w-full object-contain"
              height={400}
              src={image}
              width={400}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
}

export default ArchiveSlider;
