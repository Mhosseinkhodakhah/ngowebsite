import { getSingleDocument } from "@/actions/dashboard";
import Title from "@/components/common/title";
import DashboardHead from "@/components/dashboard/DashboardHead";
import UpdateDocumentForm from "@/components/dashboard/UpdateDocumentForm";

async function UpdateDocument({ params }: { params: any }) {
  const id = params.id;

  const data = await getSingleDocument(id);

  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 md:p-10 md:overflow-y-auto">
      <div className="px-6 w-full mt-4">
        <DashboardHead />
      </div>
      <Title page="dashboard" titleText="Update document and record" />

      <div className="w-full md:px-10 mt-10 py-10">
        <UpdateDocumentForm data={data?.data} />
      </div>
    </section>
  );
}

export default UpdateDocument;
