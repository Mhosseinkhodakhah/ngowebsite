import Title from "@/components/common/title";
import ProjectForm from "@/components/dashboard/ProjectForm";

function AddProject() {
  return (
    <section className="flex flex-col items-center w-full overflow-y-auto pb-10">
      <Title
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis mus leo; imperdiet mi fusce fames? Montes mi habitasse torquent venenatis rutrum bibendum. Ultrices magnis velit cursus,"
        page="dashboard"
        titleText="Project Registration"
      />
      <div className="w-full md:px-10">
        <ProjectForm />
      </div>
    </section>
  );
}

export default AddProject;
