"use client";

import { ReactNode, useRef } from "react";
import { Swiper } from "swiper/react";
import { useParams } from "next/navigation";
import {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArrowDown from "./icons/arrow-down";

interface Props {
  children: ReactNode;
  single?: number;
}

function Slider({ single, children }: Props) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { locale } = useParams();

  return (
    <>
      {!single && (
        <div
          className="relative mb-3 flex gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            ref={nextRef}
            className="bg-primary p-3 rounded-full cursor-pointer"
          >
            <ArrowDown
              className={`${locale === "pe" ? "-rotate-90" : "rotate-90"} text-gray`}
            />
          </div>
          <div
            ref={prevRef}
            className="bg-primary p-3 rounded-full cursor-pointer"
          >
            <ArrowDown
              className={`${locale !== "pe" ? "-rotate-90" : "rotate-90"} text-gray`}
            />
          </div>
        </div>
      )}
      <Swiper
        loop
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: !!single ? single : 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: !!single ? single : 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: !!single ? single : 4,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
        }}
        className="w-full "
        dir={locale === "pe" ? "rtl" : "ltr"}
        modules={[A11y, Navigation, Pagination, Controller, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={50}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {children}
      </Swiper>
    </>
  );
}

export default Slider;
