"use client";

import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";

import Slider from "../common/slider";
import ModalImage from "../common/modal";

function ArchiveSlider({ data }: { data: string[] }) {
  const [src, setSrc] = useState<string>("");

  const handleCloseModal = () => setSrc("");

  return (
    <div className="mt-20 flex flex-col justify-center items-center max-w-screen-md mb-10">
      <Slider single={1}>
        {data?.map((image) => (
          <SwiperSlide
            key={image}
            className="lg:w-full flex justify-center"
            onClick={() => setSrc(image)}
          >
            <Image
              alt="Archive"
              className="object-contain  lg:w-full w-1/2 mx-auto"
              height={800}
              src={image}
              width={800}
            />
          </SwiperSlide>
        ))}
      </Slider>

      <ModalImage isOpen={!!src} src={src} onClose={handleCloseModal} />
    </div>
  );
}

export default ArchiveSlider;
