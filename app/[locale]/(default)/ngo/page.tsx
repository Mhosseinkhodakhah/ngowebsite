import { getNgoData } from "@/actions/ngo";
import Title from "@/components/common/title";
import MapChart from "@/components/ngos/MapChart";
import NgosTable from "@/components/ngos/NgosTable";

async function Page() {
  const data: any = await getNgoData();

  // console.log(data);

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="navbar"
        titleText="NGO"
      />
      <MapChart />
      <NgosTable data={data?.data?.ngoTabel} />
    </section>
  );
}

export default Page;
