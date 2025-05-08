"use client";

import { SwiperSlide } from "swiper/react";
import { useParams, useRouter } from "next/navigation";
import { Avatar } from "@heroui/avatar";

import Slider from "../common/slider";
import Title from "../common/title";

import PlaceHolder from "@/public/images/placeholder.png";

function SimilarNgosSlider({ data }: { data: any }) {
  const router = useRouter();
  const { locale } = useParams();

  return (
    <section className="w-full flex flex-col justify-center items-center my-14">
      <Title page="NGOPage" titleText="Similar NGOs" />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
        <Slider>
          {data?.map((ngo: any) => (
            <SwiperSlide
              key={ngo._id}
              className="cursor-pointer"
              onClick={() => router.push(`/${locale}/ngo/${ngo._id}`)}
            >
              <div className="flex flex-col justify-center items-center">
                <Avatar
                  className="w-[150px] h-[150px]"
                  src={ngo?.logo ? ngo?.logo : PlaceHolder}
                />
                <h2 className="text-center font-bold text-lg">{ngo?.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SimilarNgosSlider;
