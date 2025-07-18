import {
  getCategoryProjects,
  getCollaborationProjects,
} from "@/actions/projects";
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

  const data = await getCategoryProjects(
    status ? status : "collaborationOpportunities",
    page ? page : "1",
    search
  );

  const { data: descriptionData } = await getCollaborationProjects();

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
        titleText="Collaboration Opportunities"
      />

      <SearchInput
        page={page}
        route="projects/collaboration-opportunities"
        status="collaborationOpportunities"
      />

      <ProjectList
        all={data?.data?.all}
        data={data?.data?.projects || []}
        page={page}
        route="collaboration-opportunities"
        status={status}
      />
    </section>
  );
}

export default Page;
