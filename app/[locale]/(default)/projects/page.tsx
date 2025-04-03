import { useTranslations } from "next-intl";

import Title from "@/components/common/title";
import Counter from "@/components/projects/Counter";
import LastProject from "@/components/projects/LastProject";
import MostParticipation from "@/components/projects/MostParticipation";

function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="navbar"
        titleText="Projects"
      />

      <Counter />

      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="projects"
        titleText="Last Projects"
      />
      <LastProject />
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="projects"
        titleText="Most participation"
      />
      <MostParticipation />
    </section>
  );
}

export default Page;
