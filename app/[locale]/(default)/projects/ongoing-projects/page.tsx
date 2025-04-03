import Title from "@/components/common/title";
import ProjectList from "@/components/ongoing-projects/ProjectList";
// import { getOngoingProjects } from "@/actions/projects";

function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="projects"
        titleText="Ongoing Projects"
      />

      <ProjectList />
    </section>
  );
}

export default Page;
