import DashboardHead from "@/components/dashboard/DashboardHead";
import Title from "@/components/common/title";
import CompleteForm from "@/components/dashboard/CompleteForm";
import { getSingleProject } from "@/actions/projects";

async function CompleteProject({ params }: { params: any }) {
  const id = await params.id;

  const data = await getSingleProject(id);

  return (
    <section className="flex flex-col items-center w-full  lg:full md:p-10 overflow-y-auto px-5 lg:px-0">
      <div className="px-6 w-full mt-4">
        <DashboardHead />
      </div>
      <Title page="dashboard" titleText="Complete Project" />

      <div className="w-full md:px-10">
        <CompleteForm id={id} data={data?.data} />
      </div>
    </section>
  );
}

export default CompleteProject;
