import DashboardHead from "@/components/dashboard/DashboardHead";
import Title from "@/components/common/title";
import CompleteForm from "@/components/dashboard/CompleteForm";

async function CompleteProject({ params }: { params: any }) {
  const id = await params.id;

  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 md:p-10 overflow-y-auto">
      <div className="px-6 w-full mt-4">
        <DashboardHead />
      </div>
      <Title page="dashboard" titleText="Complete Project" />

      <div className="w-full md:px-10">
        <CompleteForm id={id} />
      </div>
    </section>
  );
}

export default CompleteProject;
