"use client";

import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";

import useStore from "@/store";
import DashboardHead from "@/components/dashboard/DashboardHead";
import ParticipationChart from "@/components/statistics/ParticipationChart";
import CountriesChart from "@/components/statistics/CountriesChart";
import MixChart from "@/components/statistics/MixChart";
import { useTranslations } from "next-intl";
import { Divider } from "@heroui/divider";
import Counter from "@/components/projects/Counter";
import CountUp from "react-countup";

function Page() {
  const isLogin = useStore((state) => state.isLogin);
  const ngo: any = useStore((state) => state.ngo);
  const { locale } = useParams() as { locale: string };
  const t = useTranslations("dashboard");

  // useEffect(() => {
  //   if (isLogin) {
  //     return redirect({ href: "/dashboard/projects", locale: locale });
  //   } else {
  //     redirect({ href: "/", locale: locale });
  //   }
  // }, [isLogin]);

  return (
    <section className="flex flex-col items-center w-full lg:w-10/12 px-10 overflow-y-auto">
      <DashboardHead />

      {/* <ParticipationChart />
      <CountriesChart /> */}
      <div className="grid grid-cols-1 justify-center items-center w-full gap-4 bg-white dark:bg-slate-900 p-4 rounded-md shadow-md">
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <span className="p-2  rounded-md ">
            {t("Name")} : {ngo?.username}
          </span>
          <span className="p-2  rounded-md ">
            {t("Phone")} : {ngo?.phone}
          </span>
          <span className="p-2  rounded-md ">
            {t("Email")} : {ngo?.email}
          </span>
        </div>
        <Divider />
        <div className="w-full flex flex-col lg:flex-row justify-between">
          {/* <Divider /> */}
          <span className="p-2  rounded-md ">
            {t("Establishment Year")} : {ngo?.establishmentYear}
          </span>
          <span className="p-2  rounded-md ">
            {t("City")} : {ngo?.city}
          </span>
          <span className="p-2  rounded-md ">
            {t("Address")} : {ngo?.address}
          </span>
        </div>
        {/* <Divider /> */}
      </div>
      <Divider />
      <div className="flex flex-col lg:flex-row w-full gap-4 my-10">
        <div className="flex-1 bg-primary bg-opacity-15 border-1 border-white shadow-sm  w-full h-[200px] rounded-lg p-2">
          <div className="flex items-center gap-4">
            <Icon
              height="54"
              icon="material-icon-theme:folder-project"
              width="54"
            />
            <span className="font-bold">{t("Projects")}</span>
          </div>
          <div className="w-full flex justify-center font-bold text-7xl">
            <CountUp
              decimal=","
              delay={2}
              duration={2.75}
              end={ngo?.allData?.allProjects}
              style={{ fontWeight: "bold", fontSize: 80 }}
            />
          </div>
        </div>
        <div className="flex-1 bg-danger bg-opacity-15 border-1 border-white shadow-sm w-full h-[200px] rounded-lg p-2">
          <div className="flex items-center gap-4">
            <Icon
              className="text-danger-400"
              height="54"
              icon="solar:document-add-bold"
              width="54"
            />
            <span className="font-bold">{t("Documents")}</span>
          </div>
          <div className="w-full flex justify-center font-bold text-7xl">
            <CountUp
              decimal=","
              delay={2}
              duration={2.75}
              end={ngo?.allData?.allDocuments}
              style={{ fontWeight: "bold", fontSize: 80 }}
            />
          </div>
        </div>
        <div className="flex-1 bg-success bg-opacity-10 border-1 border-white shadow-sm  w-full h-[200px] rounded-lg p-2">
          <div className="flex items-center gap-4">
            <Icon
              className="text-success-400"
              height="54"
              icon="nrk:check-active"
              width="54"
            />
            <span className="font-bold">{t("Completed Projects")}</span>
          </div>
          <div className="w-full flex justify-center font-bold text-7xl">
            <CountUp
              decimal=","
              delay={2}
              duration={2.75}
              end={ngo?.allData?.complete}
              style={{ fontWeight: "bold", fontSize: 80 }}
            />
          </div>
        </div>
        <div className="flex-1 bg-warning bg-opacity-10 border-1 border-white shadow-sm  w-full h-[200px] rounded-lg p-2">
          <div className="flex items-center gap-4">
            <Icon
              className="text-warning-400"
              height="54"
              icon="mdi:stopwatch-pause"
              width="54"
            />
            <span className="font-bold">{t("Ongoing Projects")}</span>
          </div>
          <div className="w-full flex justify-center font-bold text-7xl">
            <CountUp
              decimal=","
              delay={2}
              duration={2.75}
              end={ngo?.allData?.ongoing}
              style={{ fontWeight: "bold", fontSize: 80 }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 mt-20 pb-32 lg:pb-0">
        <MixChart />
        <CountriesChart />
      </div>
    </section>
  );
}

export default Page;
