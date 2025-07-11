import DashboardHead from "@/components/dashboard/DashboardHead";
import Title from "@/components/common/title";
import UpdateProjectForm from "@/components/dashboard/ProjectUpdateForm";
import { getSingleProject } from "@/actions/projects";

async function UpdateProject({ params }: { params: any }) {
  const id = params.id;

  const data = await getSingleProject(id);

  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 md:p-10 overflow-y-auto px-5 lg:px-0">
      <div className="px-6 w-full mt-4">
        <DashboardHead />
      </div>
      <Title page="dashboard" titleText="Update Project" />

      <div className="w-full md:px-10">
        <UpdateProjectForm data={data?.data} />
      </div>
    </section>
  );
}

export default UpdateProject;
