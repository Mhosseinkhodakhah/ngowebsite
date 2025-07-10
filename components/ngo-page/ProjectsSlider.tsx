"use client";
import { SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

import Slider from "../common/slider";
import Card from "../common/card";

import PlaceHolder from "@/public/images/placeholder.png";

function ProjectsSlider({ data }: { data: any }) {
  const t = useTranslations("projects");

  return (
    <section className="w-full flex flex-col justify-center items-center max-w-screen-lg gap-4 px-5 lg:px-0">
      <h1 className="text-xl font-bold border-b-5 border-primary mb-10">
        {t("Projects")}
      </h1>

      {data?.projects.length && (
        <Slider single={3}>
          {data?.projects?.map((project: any) => (
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
    </section>
  );
}

export default ProjectsSlider;
