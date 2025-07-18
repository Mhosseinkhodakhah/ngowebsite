import { getCategoryProjects, getOngoingProjects } from "@/actions/projects";
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
  const { locale } = await params;

  const { data: descriptionData } = await getOngoingProjects();

  const data = await getCategoryProjects(
    status ? status : "ongoing",
    page ? page : "1",
    search
  );

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
        titleText="Ongoing Projects"
      />

      <SearchInput
        page={page}
        route="projects/ongoing-projects"
        status="ongoingProjects"
      />

      <ProjectList
        all={data?.data?.all}
        data={data?.data?.projects || []}
        page={page}
        route="ongoing-projects"
        status={status}
      />
    </section>
  );
}

export default Page;
