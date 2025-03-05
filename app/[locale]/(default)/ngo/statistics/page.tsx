import Title from "@/components/common/title";
import CountriesChart from "@/components/statistics/CountriesChart";
import ParticipationChart from "@/components/statistics/ParticipationChart";

function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="statics"
        titleText="Participation"
      />
      <ParticipationChart />
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="statics"
        titleText="Countries"
      />
      <CountriesChart />
    </section>
  );
}

export default Page;
