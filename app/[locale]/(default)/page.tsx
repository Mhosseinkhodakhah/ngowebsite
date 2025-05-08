import { getHomeData } from "@/actions/home";
import AboutUs from "@/components/home/AboutUs";
import Children from "@/components/home/Children";
import GradientSection from "@/components/home/GradientSection";
import Hero from "@/components/home/Hero";
import Ngos from "@/components/home/Ngos";
import Projects from "@/components/home/Projects";

async function HomePage() {
  const { data } = await getHomeData();

  return (
    <div className="light:text-dark dark:text-gray">
      <Hero data={data?.home} />
      <Children data={data?.home} />
      <Projects data={data} />
      <AboutUs data={data?.home} />
      <Ngos data={data?.ngo} />
      <GradientSection />
    </div>
  );
}

export default HomePage;
