import Title from "@/components/common/title";
import EducationList from "@/components/education/EducationList";
import FilterEducation from "@/components/education/FilterEducation";
import { getEducations } from "@/actions/educations";

async function Page({ searchParams }: { searchParams: any }) {
  const { type, sort, start, end, page } = await searchParams

  const data = await getEducations(type, sort, start, end, page);

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
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
