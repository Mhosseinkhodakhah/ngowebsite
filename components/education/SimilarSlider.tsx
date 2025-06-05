"use client";

import { SwiperSlide } from "swiper/react";
import { useParams } from "next/navigation";

import Slider from "../common/slider";
import Card from "../common/card";

function SimilarSlider({ data }: { data: any }) {
  const { locale } = useParams();


  return (
    <Slider>
      {data?.similar.map((item: any) => (
        <SwiperSlide key={item._id}>
          <Card
            admin={item?.admin?.userName}
            btnText="See More"
            description={
              locale === "en"
                ? item?.enDescription
                : locale === "pe"
                  ? item?.peDescription
                  : item?.ruDescription
            }
            imageUrl={
              locale === "en"
                ? item?.enPictures.length && item?.enPictures[0]
                : locale === "pe"
                  ? item?.pePictures.length && item?.pePictures[0]
                  : item?.ruPictures.length && item?.ruPictures[0]
            }
            name={
              locale === "en"
                ? item?.enTitle
                : locale === "pe"
                  ? item?.peTitle
                  : item?.ruTitle
            }
            route={`education/${item?._id}`}
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
}

export default SimilarSlider;
