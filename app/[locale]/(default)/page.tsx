import { getFooter, getHomeData } from "@/actions/home";
import AboutUs from "@/components/home/AboutUs";
import Children from "@/components/home/Children";
import Hero from "@/components/home/Hero";
import Ngos from "@/components/home/Ngos";
import Projects from "@/components/home/Projects";

async function HomePage() {
  const data = await getHomeData();
  const footer = await getFooter();

  const { home } = data?.data;

  return (
    <div className="light:text-dark dark:text-gray">
      <Hero data={home} footer={footer} />
      <Children data={home} />
      <Projects data={data?.data} />
      <AboutUs data={home} />
      <Ngos data={data?.data?.ngo} />
    </div>
  );
}

export default HomePage;
