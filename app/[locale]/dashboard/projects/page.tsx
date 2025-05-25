import DashboardHead from "@/components/dashboard/DashboardHead";
import AddButton from "@/components/dashboard/AddButton";
import { getProjects } from "@/actions/dashboard";
import ProjectTabs from "@/components/dashboard/ProjectsTabs";

async function Page() {
  const data = await getProjects();

  return (
    <section className="flex flex-col items-center w-full lg:w-10/12 px-2 lg:px-10 overflow-y-auto pb-64 lg:pb-0">
      <DashboardHead />
      <AddButton />

      <ProjectTabs data={data?.data} />
    </section>
  );
}

export default Page;
