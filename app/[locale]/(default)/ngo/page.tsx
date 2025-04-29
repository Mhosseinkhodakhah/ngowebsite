import { getNgoData } from "@/actions/ngo";
import Title from "@/components/common/title";
import MapChart from "@/components/ngos/MapChart";
import NgosTable from "@/components/ngos/NgosTable";

async function Page({ params }: { params: any }) {
  const data: any = await getNgoData();
  const { locale } = await params;

  const { mapNgo, ngoTabel, description } = data?.data;

  return (
    <section className="flex flex-col justify-center items-center max-w-screen-3xl mx-auto">
      <Title
        description={
          locale === "pe"
            ? description?.peDescription
            : locale === "en"
              ? description?.enDescription
              : description?.ruDescription
        }
        page="navbar"
        titleText="NGO"
      />
      <MapChart data={mapNgo} />
      <NgosTable data={ngoTabel} />
    </section>
  );
}

export default Page;
