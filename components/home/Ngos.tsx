"use client";

import { SwiperSlide } from "swiper/react";
import Card from "../common/card";
import Slider from "../common/slider";
import Title from "../common/title";

function Ngos({ data }: { data: any }) {
  console.log("ppppppppppp", data);

  const discription: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          unde quisquam esse tenetur eveniet magni, amet asperiores maxime
          labore temporibus!`;

  return (
    <section className="my-20 flex flex-col justify-center items-center">
      <Title
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, assumenda."
        page="navbar"
        titleText="NGO"
      />
      <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
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
