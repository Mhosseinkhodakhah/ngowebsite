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
      {locale === "en" && data?.educations.enPictures.length && (
        <Slider single={1}>
          {data?.educations.enPictures.map((picture: string) => (
            <SwiperSlide key={picture}>
              <Image
                alt={data?.educations.enTitle}
                className="w-full px-4 object-contain"
                height={500}
                src={picture}
                width={500}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}

      {locale === "pe" && data?.educations.pePictures.length && (
        <Slider single={1}>
          {data?.educations.pePictures.map((picture: string) => (
            <SwiperSlide key={picture}>
              <Image
                key={picture}
                alt={data?.educations.peTitle}
                className="w-full px-4 object-contain"
                height={500}
                src={picture}
                width={500}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}

      {locale === "ru" && data?.educations.ruPictures.length && (
        <Slider single={1}>
          {data?.educations.ruPictures.map((picture: string) => (
            <SwiperSlide key={picture}>
              <Image
                key={picture}
                alt={data?.educations.ruTitle}
                className="w-full px-4 object-contain"
                height={500}
                src={picture}
                width={500}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}

      {locale === "en" && data?.educations.enVideo.length > 0 && (
        <Slider single={1}>
          {data?.educations.enVideo.map((video: string) => (
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
      {locale === "pe" && data?.educations.peVideo.length > 0 && (
        <Slider single={1}>
          {data?.educations.peVideo.map((video: string) => (
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

      {locale === "ru" && data?.educations.ruVideo.length > 0 && (
        <Slider single={1}>
          {data?.educations.ruVideo.map((video: string) => (
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
