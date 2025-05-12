import DashboardHead from "@/components/dashboard/DashboardHead";
import AddButton from "@/components/dashboard/AddButton";
import { getProjects } from "@/actions/dashboard";
import ProjectTabs from "@/components/dashboard/ProjectsTabs";

async function Page() {
  const data = await getProjects();

  console.log(data);

  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-10/12 px-10 overflow-y-auto">
      <DashboardHead />
      <AddButton />

      <ProjectTabs data={data?.data} />
    </section>
  );
}

export default Page;
