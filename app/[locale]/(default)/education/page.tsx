import Title from "@/components/common/title";
import EducationList from "@/components/education/EducationList";
import FilterEducation from "@/components/education/FilterEducation";
import { getEducations } from "@/actions/educations";

async function Page({ searchParams }: { searchParams?: any }) {
  const data = await getEducations(searchParams.type, searchParams.sort);

  const sort = await searchParams.sort;
  const type = await searchParams.type;

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="navbar"
        titleText="Education & Training"
      />
      <div className="flex gap-4 w-full m-4 px-4 mt-20">
        <FilterEducation sort={sort} />
        <EducationList data={data?.data} sort={sort} type={type} />
      </div>
    </section>
  );
}

export default Page;
