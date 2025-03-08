import DashboardHead from "@/components/dashboard/DashboardHead";
import AddButton from "@/components/dashboard/AddButton";
import ProjectTable from "@/components/dashboard/ProjectTable";

function Page() {
  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 px-10 overflow-y-auto">
      <DashboardHead />
      <AddButton />
      <ProjectTable />
    </section>
  );
}

export default Page;
