"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { redirect } from "@/i18n/navigation";
import useStore from "@/store";
import DashboardHead from "@/components/dashboard/DashboardHead";
import ParticipationChart from "@/components/statistics/ParticipationChart";
import CountriesChart from "@/components/statistics/CountriesChart";
import MixChart from "@/components/statistics/MixChart";
import { useTranslations } from "next-intl";
import { Divider } from "@heroui/divider";

function Page() {
  const isLogin = useStore((state) => state.isLogin);
  const ngo: any = useStore((state) => state.ngo);
  const { locale } = useParams() as { locale: string };
  const t = useTranslations("dashboard");

  console.log("ndsf", ngo);

  // useEffect(() => {
  //   if (isLogin) {
  //     return redirect({ href: "/dashboard/projects", locale: locale });
  //   } else {
  //     redirect({ href: "/", locale: locale });
  //   }
  // }, [isLogin]);

  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-10/12 px-10 overflow-y-auto">
      <DashboardHead />

      {/* <ParticipationChart />
      <CountriesChart /> */}
      <div className="grid grid-cols-2  w-full gap-4">
        <span className="p-2 border-1 rounded-md border-slate-500 shadow-md">
          {t("Name")} : {ngo?.username}
        </span>
        <span className="p-2 border-1 rounded-md border-slate-500 shadow-md">
          {t("Phone")} : {ngo?.phone}
        </span>
        <span className="p-2 border-1 rounded-md border-slate-500 shadow-md">
          {t("Email")} : {ngo?.email}
        </span>
        <span className="p-2 border-1 rounded-md border-slate-500 shadow-md">
          {t("Establishment Year")} : {ngo?.establishmentYear}
        </span>
        <span className="p-2 border-1 rounded-md border-slate-500 shadow-md">
          {t("City")} : {ngo?.city}
        </span>
        <span className="p-2 border-1 rounded-md border-slate-500 shadow-md">
          {t("Address")} : {ngo?.address}
        </span>
      </div>
      <Divider />
      <div className="w-full flex justify-center items-center gap-4 mt-20">
        <MixChart />
        <CountriesChart />
      </div>
    </section>
  );
}

export default Page;
