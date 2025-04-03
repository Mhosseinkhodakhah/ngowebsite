/* eslint-disable react/jsx-sort-props */
"use client";

import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { SwiperSlide } from "swiper/react";

import Card from "../common/card";
import Slider from "../common/slider";

import { getProjects } from "@/actions/projects";
import PlaceHolder from "@/public/images/placeholder.png";

function MostParticipation() {
  const t = useTranslations("projects");

  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return (
    <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
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
                  route={`/projects/${project?._id}`}
                  status={
                    project?.status[0] === "goodPractice"
                      ? t("Good Practice")
                      : t("Bad practice")
                  }
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
