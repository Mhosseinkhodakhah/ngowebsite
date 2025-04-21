/* eslint-disable jsx-a11y/media-has-caption */
"use client";

import { useParams } from "next/navigation";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

import Slider from "../common/slider";

function PictureSlider({ data }: { data: any }) {
  const { locale } = useParams();

  return (
    <>
      {locale === "en" && data?.events?.enPictures?.length && (
        <Slider single={1}>
          {data?.events?.enPictures?.map((picture: string) => (
            <SwiperSlide key={picture}>
              <Image
                alt={data?.events?.enTitle}
                className="w-full px-4 object-contain"
                height={100}
                src={picture}
                width={100}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}

      {locale === "pe" && data?.events?.pePictures.length && (
        <Slider single={1}>
          {data?.events?.pePictures.map((picture: string) => (
            <SwiperSlide key={picture}>
              <Image
                key={picture}
                alt={data?.events?.peTitle}
                className="w-full px-4 object-contain"
                height={100}
                src={picture}
                width={100}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}

      {locale === "ru" && data?.events?.ruPictures.length && (
        <Slider single={1}>
          {data?.events?.ruPictures.map((picture: string) => (
            <SwiperSlide key={picture}>
              <Image
                key={picture}
                alt={data?.events.ruTitle}
                className="w-full px-4 object-contain"
                height={100}
                src={picture}
                width={100}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}

      {locale === "en" && data?.events?.enVideo.length > 0 && (
        <Slider single={1}>
          {data?.events?.enVideo.map((video: string) => (
            <SwiperSlide key={video}>
              <video
                key={video}
                controls
                className="w-full px-4 object-contain"
                src={video}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}
      {locale === "pe" && data?.events?.peVideo.length > 0 && (
        <Slider single={1}>
          {data?.events?.peVideo.map((video: string) => (
            <SwiperSlide key={video}>
              <video
                key={video}
                controls
                className="w-full px-4 object-contain"
                src={video}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}

      {locale === "ru" && data?.events?.ruVideo.length > 0 && (
        <Slider single={1}>
          {data?.events?.ruVideo.map((video: string) => (
            <SwiperSlide key={video}>
              <video
                key={video}
                controls
                className="w-full px-4 object-contain"
                src={video}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}
    </>
  );
}

export default PictureSlider;
