import { getDescriptionPage } from "../../../../actions/educations";

import Title from "@/components/common/title";
import EducationList from "@/components/education/EducationList";
import FilterEducation from "@/components/education/FilterEducation";
import { getEducations } from "@/actions/educations";

async function Page(params: any) {
  const { type, sort, start, end, page } = await params.searchParams;
  const { locale } = await params.params;
  const data = await getEducations(type, sort, start, end, page);

  const descriptions = await getDescriptionPage("educations");

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description={
          locale === "en"
            ? descriptions?.data?.enDescription
            : locale === "pe"
              ? descriptions?.data?.peDescription
              : descriptions?.data?.ruDescription
        }
        page="navbar"
        titleText="Education & Training"
      />
      <div className="flex gap-4 w-full m-4 px-4 mt-20">
        <FilterEducation query={{ end, sort, start, type, page }} />
        <EducationList
          data={data?.data}
          query={{ end, sort, start, type, page }}
        />
      </div>
    </section>
  );
}

export default Page;
