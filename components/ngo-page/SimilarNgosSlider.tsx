"use client";

import { SwiperSlide } from "swiper/react";

import Slider from "../common/slider";
import Title from "../common/title";
import Card from "../common/card";

function SimilarNgosSlider({ data }: { data: any }) {
  return (
    <section className="w-full flex flex-col justify-center items-center my-14">
      <Title page="NGOPage" titleText="Similar NGOs" />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
        <Slider>
          {data?.map((ngo: any) => (
            <SwiperSlide key={ngo?._id}>
              <Card
                description={ngo?.additionalInformation}
                imageUrl={ngo?.logo}
                name={ngo?.name}
                route={`/ngo/${ngo?._id}`}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SimilarNgosSlider;
