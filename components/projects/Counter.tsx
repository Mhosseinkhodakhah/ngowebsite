"use client";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useQuery } from "@tanstack/react-query";

import { getProjects } from "@/actions/projects";

function Counter() {
  const t = useTranslations("projects");

  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-20 w-full">
      <div className="flex flex-col justify-center items-center gap-4 m-10">
        <CountUp
          className="text-2xl font-bold"
          decimal=","
          delay={2}
          duration={2.75}
          end={data?.data?.completed}
          style={{ fontWeight: "bold", fontSize: 80 }}
        />
        <h2>{t("Completed Projects")}</h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 m-10">
        <CountUp
          className="text-2xl font-bold"
          decimal=","
          delay={2}
          duration={2.75}
          end={data?.data?.ongoing}
          style={{ fontWeight: "bold", fontSize: 80 }}
        />
        <h2>{t("Ongoing Projects")}</h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 m-10">
        <CountUp
          className="text-2xl font-bold"
          decimal=","
          delay={2}
          duration={2.75}
          end={data?.data?.collaborationOpportunities}
          style={{ fontWeight: "bold", fontSize: 80 }}
        />
        <h2>{t("Collaboration Opportunities")}</h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 m-10">
        <CountUp
          className="text-2xl font-bold"
          decimal=","
          delay={2}
          duration={2.75}
          end={data?.data?.goodPractice}
          style={{ fontWeight: "bold", fontSize: 80 }}
        />
        <h2>{t("Good Practice")}</h2>
      </div>
    </section>
  );
}

export default Counter;
