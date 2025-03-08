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

const ProjectTable = () => {
  const [searchText, setSearchText] = useState("");
  const { theme } = useTheme();
  const { locale } = useParams();
  const t = useTranslations("dashboard");

  const [rowData, setRowData] = useState([
    {
      projectName: "Model Y",
      status: "Good Practice",
      country: "Iran",
      city: "Tehran",
      projectManagerName: "Ali Mohamadi",
      projectManagerEmail: "@example.com",
      projectManagerPhone: "09123456789",
      link: "http://www.google.com",
    },
    {
      projectName: "F-Series",
      status: "Ongoing",
      country: "Iraq",
      city: "Baghdad",
      projectManagerName: "Ali Mohamadi",
      projectManagerEmail: "@example.com",
      projectManagerPhone: "09123456789",
      link: "http://www.google.com",
    },
    {
      projectName: "Corolla",
      status: "Completed",
      country: "India",
      city: "New Delhi",
      projectManagerName: "Ali Mohamadi",
      projectManagerEmail: "@example.com",
      projectManagerPhone: "09123456789",
      link: "http://www.google.com",
    },
  ]);

  const [colDefs, setColDefs] = useState<ColDef[]>([
    {
      headerName: t("Project Name"),
      field: "projectName",
    },
    {
      headerName: t("Project Status"),
      field: "status",
      width: 200,
    },
    {
      headerName: t("Country"),
      field: "country",
    },
    {
      headerName: t("City"),
      field: "city",
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
      field: "link",
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
        onChange={onSearchChange}
        startContent={<SearchIcon />}
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
        rowData={rowData}
      />
    </div>
  );
};

export default ProjectTable;
