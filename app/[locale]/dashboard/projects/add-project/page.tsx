import DashboardHead from "@/components/dashboard/DashboardHead";
import Title from "@/components/common/title";
import ProjectForm from "@/components/dashboard/ProjectForm";
import { getDescriptionPage } from "@/actions/educations";

async function AddProject({ params }: { params: any }) {
  const { locale } = await params;

  const data = await getDescriptionPage("createProject");

  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 md:p-10 overflow-y-auto">
      <div className="px-6 w-full mt-4">
        <DashboardHead />
      </div>
      <Title
        description={
          locale === "pe"
            ? data?.data?.peDescription
            : locale === "en"
              ? data?.data?.enDescription
              : data?.data?.ruDescription
        }
        page="dashboard"
        titleText="Project Registration"
      />

      <a
        download
        className="text-start text-blue-500 border-b-1"
        data-aos="fade-up"
        data-aos-duration="1000"
        href={data?.data?.pdf[0]}
      >
        {locale === "pe"
          ? "دریافت فایل راهنما"
          : locale === "en"
            ? "Get the help file"
            : "Получить файл справки"}
      </a>

      <div className="w-full md:px-10">
        <ProjectForm />
      </div>
    </section>
  );
}

export default AddProject;
