import Title from "@/components/common/title";
import MapChart from "@/components/common/ngos/MapChart";
import NgosTable from "@/components/common/ngos/NgosTable";

function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        titleText="NGO"
      />
      <MapChart />
      <NgosTable />
    </section>
  );
}

export default Page;
