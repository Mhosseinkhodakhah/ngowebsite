import Image from "next/image";
import { useTranslations } from "next-intl";

import Title from "@/components/common/title";
import AboutUsImage from "@/public/images/about-us-1.jpg";
import MissionAndGoal from "@/public/images/mission-and-goal.png";

export default function AboutPage() {
  const t = useTranslations("aboutUs");

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <Title
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          titleText="About Us"
        />
        <div className="mt-20 flex flex-col md:flex-row justify-around w-2/3">
          <div>
            <Image alt="about us" className="w-2/3" src={AboutUsImage} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-start">Lorem Ipsum</h2>
            <p className="font-light text-start mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <Title page="aboutUs" titleText="Mission and goals" />
          <Image
            alt="mission and goal"
            className="w-1/3"
            src={MissionAndGoal}
          />
          <p className="font-light text-center mt-4 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </p>
        </div>
      </section>
    </>
  );
}
