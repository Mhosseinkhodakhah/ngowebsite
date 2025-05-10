"use client";

import { SwiperSlide } from "swiper/react";
import { Avatar } from "@heroui/avatar";

import Card from "../common/card";
import Slider from "../common/slider";
import Title from "../common/title";

import PlaceHolder from "@/public/images/placeholder.png";
import { useParams, useRouter } from "next/navigation";
function Ngos({ data }: { data: any }) {
  const router = useRouter();
  const { locale } = useParams();

  return (
    <section
      className="my-5 flex flex-col justify-center items-center max-w-screen-lg mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Title page="navbar" titleText="NGO" />
      <div className="flex flex-col w-full px-12 mt-20">
        <Slider>
          {data?.map((ngo: any) => (
            <SwiperSlide
              key={ngo._id}
              className="cursor-pointer "
              style={{ height: "300px" }}
              onClick={() => router.push(`/${locale}/ngo/${ngo._id}`)}
            >
              <div className="flex flex-col justify-center items-center">
                <Avatar
                  className="w-[150px] h-[150px] hover:w-[200px] hover:h-[200px] transition-all duration-300"
                  alt="logo"
                  src={ngo?.logo ? ngo?.logo : PlaceHolder}
                />
                <h2 className="text-center font-bold text-lg mt-4">
                  {ngo?.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Ngos;
