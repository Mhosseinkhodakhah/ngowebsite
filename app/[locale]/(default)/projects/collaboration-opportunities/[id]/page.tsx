import { getSingleProject } from "@/actions/projects";
import Title from "@/components/common/title";
import DocumentsAndReports from "@/components/projects/DocumentsAndReports";
import MoreInformation from "@/components/projects/MoreInformation";
import ProjectInfo from "@/components/projects/ProjectInfo";
import VisualDocuments from "@/components/projects/VisualDocuments";

async function Page({ params }: { params: any }) {
  const id = await params.id;
  const locale = await params.locale;

  const data = await getSingleProject(id);

  const {
    name,
    description,
    goalAndAchievements,
    moreInformation,
    documentsAndReports,
    language,
  } = data?.data;

  return (
    <section
      className="flex flex-col justify-center items-center"
      dir={language === "en" || language === "ru" ? "ltr" : "rtl"}
    >
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20 w-[90%] lg:w-max px-6 lg:px-0 text-justify">
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

      <ProjectInfo data={data?.data} locale={locale} />
      {documentsAndReports && <DocumentsAndReports data={data?.data} />}
      <VisualDocuments data={data?.data} />
      {moreInformation && <MoreInformation moreInformation={moreInformation} />}
    </section>
  );
}

export default Page;
