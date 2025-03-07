import DashboardHead from "@/components/dashboard/DashboardHead";
import AddButton from "@/components/dashboard/AddButton";

function Page() {
  return (
    <div className="w-full md:w-3/5 lg:w-3/4 p-10">
      <DashboardHead />
      <AddButton />
      <p>This is the Projects Page</p>
    </div>
  );
}

export default Page;
