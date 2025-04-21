"use client";

import { useParams } from "next/navigation";

import ProjectCard from "./ProjectCard";

import Title from "@/components/common/title";

function Projects({ data }: { data: any }) {
  const { locale } = useParams();

  return (
    <section className="my-20 flex flex-col justify-center items-center">
      <Title
        description={
          locale === "pe"
            ? data?.home?.peProjectDescription
            : locale === "en"
              ? data?.home?.enProjectDescription
              : data?.home?.ruProjectDescription
        }
        page="navbar"
        titleText="Projects"
      />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2  gap-2 px-5 w-full md:w-auto max-w-screen-lg">
        {data?.projects?.map((project: any) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
