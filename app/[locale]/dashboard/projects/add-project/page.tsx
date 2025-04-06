import DashboardHead from "@/components/dashboard/DashboardHead";
import Title from "@/components/common/title";
import ProjectForm from "@/components/dashboard/ProjectForm";

function AddProject() {
  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 md:p-10 overflow-y-auto">
      <div className="px-6 w-full mt-4">
        <DashboardHead />
      </div>
      <Title page="dashboard" titleText="Project Registration" />

      <div className="w-full md:px-10">
        <ProjectForm />
      </div>
    </section>
  );
}

export default AddProject;
