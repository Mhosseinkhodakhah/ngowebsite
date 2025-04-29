import Title from "@/components/common/title";
import Counter from "@/components/projects/Counter";
import LastProject from "@/components/projects/LastProject";
import MostParticipation from "@/components/projects/MostParticipation";
import { getProjects } from "@/actions/projects";

async function Page() {
  const data = await getProjects();

  return (
    <section className="flex flex-col justify-center items-center">
      <Title page="navbar" titleText="Projects" />

      <Counter data={data?.data} />

      <Title page="projects" titleText="Last Projects" />
      <LastProject data={data} />
      <Title page="projects" titleText="Most participation" />
      <MostParticipation data={data} />
    </section>
  );
}

export default Page;
