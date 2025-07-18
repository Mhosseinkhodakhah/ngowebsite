import { getCategoryProjects, getCompletedProjects } from "@/actions/projects";
import SearchInput from "@/components/common/search-input";
import Title from "@/components/common/title";
import ProjectList from "@/components/projects/ProjectList";

async function Page({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { status: string; search?: string; page: string };
}) {
  const { status, search, page } = await searchParams;

  const data = await getCategoryProjects(
    status ? status : "completed",
    page ? page : "1",
    search
  );

  const { data: descriptionData } = await getCompletedProjects();
  const { locale } = await params;

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description={
          locale === "pe"
            ? descriptionData?.peDescription
            : locale === "en"
              ? descriptionData?.enDescription
              : descriptionData?.ruDescription
        }
        page="projects"
        titleText="Completed Projects"
      />

      <SearchInput
        page={page}
        route="projects/completed-projects"
        status="completedProjects"
      />

      <ProjectList
        all={data?.data?.all}
        data={data?.data?.projects || []}
        page={page}
        route="completed-projects"
        status={status}
      />
    </section>
  );
}

export default Page;
