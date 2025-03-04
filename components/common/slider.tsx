"use client";

import { ReactNode, useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { useParams } from "next/navigation";
import {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Pagination,
} from "swiper/modules";

import ArrowDown from "./icons/arrow-down";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  children: ReactNode;
  content: {}[];
}

function Slider({ content, children }: Props) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { locale } = useParams();

  return (
    <>
      <div className="relative mb-3 flex gap-2">
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
      <Swiper
        autoplay
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
        }}
        className="w-full"
        modules={[A11y, Navigation, Pagination, Controller, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop
        spaceBetween={50}
      >
        {content.map((item: any) => (
          <SwiperSlide key={item.id}>{children}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
