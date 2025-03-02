import Image from "next/image";
import { Button } from "@heroui/button";

import HeroImg from "@/public/images/hero-img.jpg";
function Hero() {
  return (
    <section className="h-screen flex justify-center">
      <Image
        alt="hero image"
        className="object-cover md:h-screen md:object-fill md:absolute left-0 right-0 top-0"
        src={HeroImg}
      />
      <div className="absolute mx-4 md:w-[500px] bottom-10 md:bottom-24 bg-gray dark:bg-secondary p-4 rounded-md flex justify-center items-center flex-col opacity-80 backdrop-blur-md">
        <p className="text-dark dark:text-gray text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
          officiis. Quo non porro quod. Est, ab nemo alias harum placeat
          laudantium veniam, dolorum officiis esse eaque temporibus facere
          veritatis maxime.
        </p>
        <Button
          className="mt-4 text-gray w-1/3"
          color="primary"
          variant="shadow"
        >
          Join Us
        </Button>
      </div>
    </section>
  );
}

export default Hero;
