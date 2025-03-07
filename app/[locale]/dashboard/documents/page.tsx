import AddButton from "@/components/dashboard/AddButton";
import DashboardHead from "@/components/dashboard/DashboardHead";

function Page() {
  return (
    <div className="w-full md:w-3/5 lg:w-3/4 p-10">
      <DashboardHead />
      <AddButton />
      <p>This is the Document Page.</p>
    </div>
  );
}

export default Page;
