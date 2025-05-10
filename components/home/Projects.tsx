"use client";

import { useParams } from "next/navigation";

import ProjectCard from "./ProjectCard";

import Title from "@/components/common/title";
import { useTranslations } from "next-intl";

function Projects({ data }: { data: any }) {
  const { locale } = useParams();
  const t = useTranslations("navbar");

  return (
    <section className="my-20 flex flex-col justify-center items-center bg-primary p-5 rounded-lg bg-gradient-to-r from-primary to-secondary max-w-screen-2xl mx-auto">
      <h1
        className="text-xl font-bold border-b-5 border-primary mt-20 text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {t("Projects")}
      </h1>
      <p
        className={`mt-5  w-full  rounded-md  md:px-0  text-sm p-4 text-white max-w-xl text-center`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {locale === "pe"
          ? data?.home?.peProjectDescription
          : locale === "en"
            ? data?.home?.enProjectDescription
            : data?.home?.ruProjectDescription}
      </p>

      <div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 px-5 w-full  md:max-w-screen-xl "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {data?.projects?.map((project: any) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
