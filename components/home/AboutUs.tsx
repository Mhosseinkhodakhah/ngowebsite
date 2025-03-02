import Image from "next/image";

import AboutUsBtn from "./AboutUsBtn";

import AboutUs1 from "@/public/images/about-us-1.jpg";
import AboutUs2 from "@/public/images/about-us-2.jpg";

function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center md:items-start md:flex-row gap-20 mt-32">
      <div className="flex-1 relative order-2 md:order-1">
        <Image
          alt="about us"
          className="w-[300px]"
          height={100}
          src={AboutUs2}
          width={100}
        />
        <Image
          alt="about us"
          className="w-[250px] border-5 border-primary relative start-5 "
          height={100}
          src={AboutUs1}
          width={100}
        />
      </div>
      <div className="flex flex-col items-center md:items-start order-1 md:order-2">
        <h1 className="text-xl font-bold border-b-5 border-primary inline">
          About Us
        </h1>
        <p className="mt-5 max-w-md  text-secondary dark:text-gray font-light px-4 md:px-0 text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit
          assumenda tenetur perspiciatis sapiente cumque omnis perferendis magni
          dolore numquam! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minus velit assumenda tenetur perspiciatis sapiente cumque omnis
          perferendis magni dolore numquam!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minus velit assumenda tenetur
          perspiciatis sapiente cumque omnis perferendis magni dolore numquam!
        </p>
        <AboutUsBtn />
      </div>
    </div>
  );
}

export default AboutUs;
