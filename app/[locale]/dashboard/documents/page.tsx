import AddButton from "@/components/dashboard/AddButton";
import DashboardHead from "@/components/dashboard/DashboardHead";
import DocumentTabs from "@/components/dashboard/DocumentTabs";
import { getDocuments } from "@/actions/dashboard";

async function Page() {
  const data = await getDocuments();

  return (
    <section className="flex flex-col items-center w-full lg:full px-2 lg:px-10 overflow-y-auto">
      <DashboardHead />
      <AddButton />
      <DocumentTabs data={data} />
    </section>
  );
}

export default Page;
