import Children from "@/components/home/Children";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <div className="light:text-dark dark:text-gray w-full">
      <Hero />
      <Children />
    </div>
  );
}
