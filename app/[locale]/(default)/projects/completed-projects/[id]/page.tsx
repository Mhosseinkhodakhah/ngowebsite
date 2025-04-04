import { getSingleProject } from "@/actions/projects";
import Title from "@/components/common/title";
import CompletedProject from "@/components/projects/CompletedProject";

async function Page({ params }: { params: { id: string } }) {
  const id = await params.id;

  const data = await getSingleProject(id);

  const { name, description, goalAndAchievements, status } = data?.data;

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20">
        {name}
      </h1>
      <p
        className={`mt-5  w-full  text-secondary dark:text-gray font-light px-4 md:px-0 text-center max-w-screen-md`}
      >
        {description}
      </p>
      <Title
        description={goalAndAchievements[0]}
        titleText="Goal And Achievements"
      />
      <CompletedProject data={data} />
    </section>
  );
}

export default Page;
