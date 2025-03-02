import AboutUs from "./AboutUs";
import ProjectCard from "./ProjectCard";

import Title from "@/components/common/title";

function Projects() {
  return (
    <section className="my-20 flex flex-col justify-center items-center">
      <Title
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit
        assumenda tenetur perspiciatis sapiente cumque omnis perferendis magni
        dolore numquam!"
        titleText="Projects"
      />

      <div className="mt-10 grid grid-rows-2  grid-cols-2  gap-2 mx-20 w-full md:w-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <AboutUs />
    </section>
  );
}

export default Projects;
