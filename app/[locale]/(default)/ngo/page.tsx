import MapChart from "@/components/common/ngos/MapChart";
import Title from "@/components/common/title";

function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        titleText="NGO"
      />
      <MapChart />
    </section>
  );
}

export default Page;
