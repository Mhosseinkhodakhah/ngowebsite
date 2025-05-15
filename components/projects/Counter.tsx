"use client";

import { useTranslations } from "next-intl";
import CountUp from "react-countup";

function Counter({ data }: { data: any }) {
  const t = useTranslations("projects");

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-10 w-[95%] lg:w-full max-w-screen-xl text-white bg-gradient-to-br from-secondary to-primary p-14 transition-all duration-500 ease-in-out animate-border-radius"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col justify-center items-center gap-4 m-10">
        <CountUp
          className="text-2xl font-bold"
          decimal=","
          delay={2}
          duration={2.75}
          end={data?.completed}
          style={{ fontWeight: "bold", fontSize: 80 }}
        />
        <h2 className="text-center">{t("Completed Projects")}</h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 m-10">
        <CountUp
          className="text-2xl font-bold"
          decimal=","
          delay={2}
          duration={2.75}
          end={data?.ongoing}
          style={{ fontWeight: "bold", fontSize: 80 }}
        />
        <h2 className="text-center">{t("Ongoing Projects")}</h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 m-10">
        <CountUp
          className="text-2xl font-bold"
          decimal=","
          delay={2}
          duration={2.75}
          end={data?.collaborationOpportunities}
          style={{ fontWeight: "bold", fontSize: 80 }}
        />
        <h2 className="text-center">{t("Collaboration Opportunities")}</h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 m-10">
        <CountUp
          className="text-2xl font-bold"
          decimal=","
          delay={2}
          duration={2.75}
          end={data?.goodPractice}
          style={{ fontWeight: "bold", fontSize: 80 }}
        />
        <h2 className="text-center">{t("Good Practice")}</h2>
      </div>
    </section>
  );
}

export default Counter;
