import Title from "@/components/common/title";
import EducationList from "@/components/education/EducationList";
import FilterEducation from "@/components/education/FilterEducation";

function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        titleText="Education & Training"
      />
      <div className="flex gap-4 w-full m-4 px-4 mt-20">
        <FilterEducation />
        <EducationList />
      </div>
    </section>
  );
}

export default Page;
