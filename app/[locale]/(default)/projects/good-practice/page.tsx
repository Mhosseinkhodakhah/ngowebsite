import { useTranslations } from "next-intl";

import Title from "@/components/common/title";
import ProjectList from "@/components/good-practice-project/ProjectList";
// import { getOngoingProjects } from "@/actions/projects";

function Page() {
  const t = useTranslations("projects");

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="projects"
        titleText="Good Practice"
      />

      <ProjectList />
    </section>
  );
}

export default Page;
