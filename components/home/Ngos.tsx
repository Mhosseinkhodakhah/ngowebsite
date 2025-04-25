"use client";

import { SwiperSlide } from "swiper/react";

import Card from "../common/card";
import Slider from "../common/slider";
import Title from "../common/title";

function Ngos({ data }: { data: any }) {
  return (
    <section
      className="my-20 flex flex-col justify-center items-center max-w-screen-lg mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Title page="navbar" titleText="NGO" />
      <div className="flex flex-col w-full px-12 mt-20">
        <Slider>
          {data?.map((ngo: any) => (
            <SwiperSlide key={ngo._id}>
              <Card
                description={ngo?.additionalInformation}
                imageUrl={ngo?.logo}
                name={ngo?.name}
                route={`/ngo/${ngo._id}`}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Ngos;
