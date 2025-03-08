import AddButton from "@/components/dashboard/AddButton";
import DashboardHead from "@/components/dashboard/DashboardHead";
import DocumentsTable from "@/components/dashboard/DocumentsTable";

function Page() {
  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 px-10 overflow-y-auto">
      <DashboardHead />
      <AddButton />
      <DocumentsTable />
    </section>
  );
}

export default Page;
