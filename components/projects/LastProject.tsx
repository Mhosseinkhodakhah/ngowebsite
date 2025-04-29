"use client";

/* eslint-disable react/jsx-sort-props */

import { useTranslations } from "next-intl";
import { SwiperSlide } from "swiper/react";

import Card from "../common/card";
import Slider from "../common/slider";

import PlaceHolder from "@/public/images/placeholder.png";

function LastProject({ data }: { data: any }) {
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col w-full lg:w-2/3 p-20 mt-20 bg-violet-100 rounded-2xl">
      <>
        {data?.data?.lastProjects?.length > 0 && (
          <Slider>
            {data?.data?.lastProjects?.map((project: any) => (
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
                  ngo={project?.ngo?.name}
                  route={`/projects/${project?._id}`}
                  status={
                    project?.status[0] === "goodPractice"
                      ? t("Good Practice")
                      : project?.status[0] === "ongoing"
                        ? t("Ongoing")
                        : project?.status[0] === "completed"
                          ? t("Completed")
                          : project?.status[0] === "collaborationOpportunities"
                            ? t("Collaboration Opportunities")
                            : t("")
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

export default LastProject;
