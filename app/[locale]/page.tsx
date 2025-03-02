import Children from "@/components/home/Children";
import Hero from "@/components/home/Hero";
// import Projects from "@/components/home/Projects";

export default function HomePage() {
  return (
    <div className="light:text-dark dark:text-gray">
      <Hero />
      <Children />
      {/* <Projects /> */}
    </div>
  );
}
