import { getDescriptionPage } from "../../../../actions/educations";

import Title from "@/components/common/title";
import EducationList from "@/components/education/EducationList";
import FilterEducation from "@/components/education/FilterEducation";
import { getEducations } from "@/actions/educations";
import Empty from "@/components/common/empty";

async function Page(params: any) {
  const { type, sort, start, end, page } = await params.searchParams;
  const { locale } = await params.params;
  // const { all, educations } = await getEducations(type, sort, start, end, page);
  const data = await getEducations(type, sort, start, end, page);

  console.log("dddd ", data?.data);

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
        titleText="Education"
      />
      {data?.data?.educations ? (
        <div
          className="flex gap-4 w-full m-4 px-2 lg:px-10 mt-20"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <FilterEducation query={{ end, sort, start, type, page }} />
          <EducationList
            all={data?.data?.all}
            data={data?.data?.educations}
            query={{ end, sort, start, type, page }}
          />
        </div>
      ) : (
        <Empty description="The list is empty" />
      )}
    </section>
  );
}

export default Page;
