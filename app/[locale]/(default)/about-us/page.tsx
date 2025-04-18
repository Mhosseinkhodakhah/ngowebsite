import Image from "next/image";

import Title from "@/components/common/title";
import AboutUsImage from "@/public/images/about-us-1.jpg";
import MissionAndGoal from "@/public/images/mission-and-goal.png";
import { getAboutUs } from "@/actions/about-us";

export default async function AboutPage({ params }: { params: any }) {
  const { data } = await getAboutUs();
  const { locale } = await params;

  console.log("ddddd", data);
  console.log("ddddd", locale);

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <Title
          description={
            locale === "pe"
              ? data?.peDescription
              : locale === "en"
                ? data?.enDescription
                : data?.ruDescription
          }
          page="navbar"
          titleText="About Us"
        />
        <div className="mt-20 flex flex-col md:flex-row justify-around max-w-screen-lg">
          <div className="flex-1">
            <Image alt="about us" className="md:w-2/3" src={AboutUsImage} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-center md:text-start my-4 md:my-0">
              {locale === "pe"
                ? data?.peTitle
                : locale === "en"
                  ? data?.enTitle
                  : data?.ruTitle}
            </h2>
            <p className="font-light text-center md:text-start mt-4">
              {locale === "pe"
                ? data?.peMiddleImageDescription
                : locale === "en"
                  ? data?.enMiddleImageDescription
                  : data?.ruMiddleImageDescription}
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
            {locale === "pe"
              ? data?.peMissionAndGoals
              : locale === "en"
                ? data?.enMissionAndGoals
                : data?.ruMissionAndGoals}
          </p>
        </div>
      </section>
    </>
  );
}
