"use client";

import { Tab, Tabs } from "@heroui/tabs";
import { useTranslations } from "next-intl";

import ProjectTable from "./ProjectTable";
import DocumentsTable from "./DocumentsTable";

function DocumentTabs({ data }: { data: any }) {
  const t = useTranslations("dashboard");

  return (
    <div className="flex w-full flex-col ">
      <Tabs
        aria-label="Status"
        className="text-slate-50 active:text-slate-50 bg-violet-100 dark:bg-slate-900 rounded-md p-3"
        color="primary"
        variant="underlined"
      >
        <Tab
          key="Approved"
          className="text-white active:text-slate-50"
          title={t("Approved")}
        >
          <DocumentsTable data={data.data} />
        </Tab>
        <Tab
          key="Waiting"
          className="text-white active:text-slate-50"
          title={t("Waiting")}
        >
          <DocumentsTable data={data.data} />
        </Tab>
        <Tab
          key="Rejected"
          className="text-white active:text-slate-50"
          title={t("Rejected")}
        >
          <DocumentsTable data={data.data} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default DocumentTabs;
