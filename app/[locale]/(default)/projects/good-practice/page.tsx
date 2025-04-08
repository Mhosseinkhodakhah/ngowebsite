import { getCategoryProjects } from "@/actions/projects";
import Title from "@/components/common/title";
import ProjectList from "@/components/projects/ProjectList";

async function Page({
  searchParams,
}: {
  searchParams: { status: string; page: string };
}) {
  const { status, page } = await searchParams;

  const data = await getCategoryProjects(
    status ? status : "goodPractice",
    page ? page : "1",
  );

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="projects"
        titleText="Good Practice"
      />

      <ProjectList
        data={data}
        page={page}
        route="good-practice"
        status={status}
      />
    </section>
  );
}

export default Page;
