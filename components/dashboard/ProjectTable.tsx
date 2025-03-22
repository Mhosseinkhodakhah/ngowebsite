"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule, ColDef } from "ag-grid-community";
import { Input } from "@heroui/input";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  AG_GRID_LOCALE_EN,
  AG_GRID_LOCALE_IR,
} from "@ag-grid-community/locale";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

import { SearchIcon } from "../common/icons";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // or any other theme you prefer
import { Tooltip } from "@heroui/tooltip";

const ProjectTable = ({ data }: { data: any }) => {
  const [searchText, setSearchText] = useState("");
  const { theme } = useTheme();
  const { locale } = useParams();
  const t = useTranslations("dashboard");

  const [colDefs, setColDefs] = useState<ColDef[]>([
    {
      headerName: t("Project Name"),
      field: "name",
    },
    {
      headerName: t("Project Status"),
      field: "status",
      width: 200,
    },
    {
      headerName: t("Country"),
      field: "location.country",
    },
    {
      headerName: t("City"),
      field: "location.city",
    },
    {
      headerName: t("Project Manager Name"),
      field: "projectManagerName",
    },
    {
      headerName: t("Project Manager Email"),
      field: "projectManagerEmail",
    },
    {
      headerName: t("Project Manager Phone"),
      field: "projectManagerPhone",
    },
    {
      headerName: t("Link"),
      field: "moreInformation",
      cellRenderer: (params: any) => {
        return (
          <Link href={`${params.value}`} rel="noreferrer" target="_blank">
            {params.value}
          </Link>
        );
      },
    },
    {
      headerName: t("Actions"),
      field: "actions",
      cellRenderer: () => {
        return (
          <Tooltip color="danger" content="Delete Project">
            <Icon
              className="text-danger"
              height="24"
              icon="mdi-light:delete"
              width="24"
            />
          </Tooltip>
        );
      },
    },
  ]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = (event.target as HTMLInputElement).value;

    setSearchText(input);
  };

  const defaultColDef = {
    // sortable: true,
    // filter: true,
    resizable: true,
    // flex: 1, // Allows columns to take equal space
    cellStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    headerStyle: {
      textAlign: "center",
    },
    headerClass: "header-cell",
  };

  return (
    <div
      className={`w-full h-[500px] ${theme === "dark" ? "ag-theme-alpine-dark" : "ag-theme-alpine"}  `}
    >
      <Input
        className="max-w-sm my-2"
        placeholder={t("Search")}
        type="text"
        value={searchText}
        variant="bordered"
        startContent={<SearchIcon />}
        onChange={onSearchChange}
      />
      <AgGridReact
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        enableRtl={locale === "pe" ? true : false}
        localeText={locale === "pe" ? AG_GRID_LOCALE_IR : AG_GRID_LOCALE_EN}
        modules={[ClientSideRowModelModule]} // Register the module here
        pagination={true}
        paginationPageSize={10}
        quickFilterText={searchText}
        rowData={data ?? []}
      />
    </div>
  );
};

export default ProjectTable;
