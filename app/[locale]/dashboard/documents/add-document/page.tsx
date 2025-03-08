import Title from "@/components/common/title";
import DashboardHead from "@/components/dashboard/DashboardHead";
import DocumentsAndRecordsForm from "@/components/dashboard/DocumentsAndRecordsForm";

function AddDocument() {
  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 md:p-10 overflow-y-auto">
      <div className="px-6 w-full mt-4">
        <DashboardHead />
      </div>
      <Title
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis mus leo; imperdiet mi fusce fames? Montes mi habitasse torquent venenatis rutrum bibendum. Ultrices magnis velit cursus,"
        page="dashboard"
        titleText="Uploading documents and records"
      />

      <div className="w-full md:px-10 mt-10">
        <DocumentsAndRecordsForm />
      </div>
    </section>
  );
}

export default AddDocument;
