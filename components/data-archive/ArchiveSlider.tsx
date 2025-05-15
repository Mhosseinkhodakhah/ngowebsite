"use client";

import { SwiperSlide } from "swiper/react";
import Image from "next/image";

import Slider from "../common/slider";
import { useState } from "react";
import ConfirmModal from "../common/confirm";
import ModalImage from "../common/modal";

function ArchiveSlider({ data }: { data: string[] }) {
  const [src, setSrc] = useState<string>("");

  const handleCloseModal = () => setSrc("");

  return (
    <div className="mt-20 flex flex-col justify-center items-center max-w-screen-md">
      <Slider single={1}>
        {data?.map((image) => (
          <SwiperSlide
            key={image}
            className="w-full flex justify-center bg-orange-500"
            onClick={() => setSrc(image)}
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

      <ModalImage isOpen={!!src} src={src} onClose={handleCloseModal} />
    </div>
  );
}

export default ArchiveSlider;
