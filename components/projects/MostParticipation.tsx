"use client";

/* eslint-disable react/jsx-sort-props */

import { SwiperSlide } from "swiper/react";

import Card from "../common/card";
import Slider from "../common/slider";

import PlaceHolder from "@/public/images/placeholder.png";

function MostParticipation({ data }: { data: any }) {
  return (
    <div
      className="flex flex-col w-full px-6 lg:p-20 rounded-2xl max-w-screen-xl"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <>
        {data?.data?.lastProjects?.length > 0 && (
          <Slider>
            {data?.data?.mostParticipation?.map((project: any) => (
              <SwiperSlide key={project?._id}>
                <Card
                  btnText="Read More"
                  description={project?.description}
                  imageUrl={
                    project?.documentsAndReport?.files.length > 0
                      ? project?.documentsAndReport?.files[0]
                      : PlaceHolder
                  }
                  name={project?.name}
                  ngo={project?.ngo}
                  route={
                    project?.status?.includes("completed")
                      ? `/projects/completed-projects/${project?._id}`
                      : `/projects/${project?._id}`
                  }
                  status={project?.status}
                />
              </SwiperSlide>
            ))}
          </Slider>
        )}
      </>
    </div>
  );
}

export default MostParticipation;
