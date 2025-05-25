import { getDescriptionPage } from "@/actions/educations";
import Title from "@/components/common/title";
import CountriesChart from "@/components/statistics/CountriesChart";
import MixChart from "@/components/statistics/MixChart";
import ParticipationChart from "@/components/statistics/ParticipationChart";

async function Page({ params }: { params: any }) {
  const data = await getDescriptionPage("statistic");
  const { locale } = await params;

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description={
          locale === "pe"
            ? data?.data?.participation?.peDescription
            : locale === "en"
              ? data?.data?.participation?.enDescription
              : data?.data?.participation?.ruDescription
        }
        page="statics"
        titleText="Participation"
      />
      <ParticipationChart />
      <Title
        description={
          locale === "pe"
            ? data?.data?.countriesDescription?.peDescription
            : locale === "en"
              ? data?.data?.countriesDescription?.enDescription
              : data?.data?.countriesDescription?.ruDescription
        }
        page="statics"
        titleText="Countries"
      />
      <div className="w-full flex flex-col lg:flex-row items-center justify-around lg:mt-32 max-w-screen-2xl">
        <CountriesChart />
        <MixChart />
      </div>
      {/* <MixChart /> */}
    </section>
  );
}

export default Page;
