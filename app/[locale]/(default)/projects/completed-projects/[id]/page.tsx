import { getSingleProject } from "@/actions/projects";
import Title from "@/components/common/title";
import CompletedProject from "@/components/projects/CompletedProject";
import MoreInformation from "@/components/projects/MoreInformation";
import ProjectInfo from "@/components/projects/ProjectInfo";

async function Page({ params }: { params: { id: string; locale: string } }) {
  const id = await params.id;
  const locale = await params.locale;

  const data = await getSingleProject(id);

  console.log("ddddddd", data);

  const { name, description, goalAndAchievements, moreInformation } =
    data?.data;

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20">
        {name}
      </h1>
      <p
        className={`mt-5  w-full  text-secondary dark:text-gray font-light px-4 md:px-0 text-justify max-w-screen-md`}
      >
        {description}
      </p>
      <Title
        description={goalAndAchievements[0]}
        page="projects"
        titleText="Goal And Achievements"
      />
      <CompletedProject data={data?.data} />

      {/* <ProjectInfo data={data?.data} locale={locale} /> */}
      {/* {documentsAndReports && <DocumentsAndReports data={data?.data} />} */}
      {/* {moreInformation && <MoreInformation moreInformation={moreInformation} />} */}
    </section>
  );
}

export default Page;
