import AddButton from "@/components/dashboard/AddButton";
import DashboardHead from "@/components/dashboard/DashboardHead";
import DocumentsTable from "@/components/dashboard/DocumentsTable";
import { getDocuments } from "@/server/dashboard";

async function Page() {
  const data = await getDocuments();

  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 px-10 overflow-y-auto">
      <DashboardHead />
      <AddButton />
      <DocumentsTable data={data.data} />
    </section>
  );
}

export default Page;
