import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="my-20 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold border-b-5 border-primary">Projects</h1>
      <p className="mt-5 max-w-md text-center text-secondary dark:text-gray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit
        assumenda tenetur perspiciatis sapiente cumque omnis perferendis magni
        dolore numquam!
      </p>
      <div className="mt-10 grid grid-rows-2  grid-cols-2  gap-2 mx-20 w-full md:w-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
