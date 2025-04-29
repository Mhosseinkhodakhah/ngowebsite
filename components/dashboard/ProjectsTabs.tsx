"use client";

import { Tab, Tabs } from "@heroui/tabs";
import { useTranslations } from "next-intl";

import ProjectTable from "./ProjectTable";

function ProjectTabs({ data }: { data: any }) {
  const t = useTranslations("dashboard");

  return (
    <div className="flex w-full flex-col ">
      <Tabs
        aria-label="Status"
        className="text-slate-50 active:text-slate-50 bg-violet-100 rounded-md p-3"
        color="primary"
        variant="underlined"
      >
        <Tab
          key="goodPractice"
          className="text-slate-50 active:text-slate-50"
          title={t("Good Practice")}
        >
          <ProjectTable data={data?.goodPractice} />
        </Tab>
        <Tab
          key="ongoing"
          className="text-white active:text-slate-50"
          title={t("Ongoing")}
        >
          <ProjectTable data={data?.ongoing} />
        </Tab>
        <Tab
          key="completed"
          className="text-white active:text-slate-50"
          title={t("Completed")}
        >
          <ProjectTable data={data?.completed} />
        </Tab>
        <Tab
          key="collaborationOpportunities"
          className="text-white active:text-slate-50"
          title={t("Collaboration Opportunities")}
        >
          <ProjectTable data={data?.collaborationOpportunities} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ProjectTabs;
