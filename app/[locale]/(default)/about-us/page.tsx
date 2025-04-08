import Image from "next/image";

import Title from "@/components/common/title";
import AboutUsImage from "@/public/images/about-us-1.jpg";
import MissionAndGoal from "@/public/images/mission-and-goal.png";

export default function AboutPage() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <Title
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          page="navbar"
          titleText="About Us"
        />
        <div className="mt-20 flex flex-col md:flex-row justify-around w-2/3">
          <div>
            <Image alt="about us" className="md:w-2/3" src={AboutUsImage} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-center md:text-start my-4 md:my-0">
              Lorem Ipsum
            </h2>
            <p className="font-light text-center md:text-start mt-4">
              Lorem is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s Lorem is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industrys
              standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <Title page="aboutUs" titleText="Mission and goals" />
          <Image
            alt="mission and goal"
            className="md:w-1/3 w-2/3"
            src={MissionAndGoal}
          />
          <p className="font-light text-center mt-4 max-w-lg px-2">
            Lorem simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s Lorem simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
        </div>
      </section>
    </>
  );
}
