"use client";

import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule, ColDef } from "ag-grid-community";
import { Input } from "@heroui/input";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import { Avatar } from "@heroui/avatar";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/button";

import { SearchIcon } from "../icons";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // or any other theme you prefer
import {
  AG_GRID_LOCALE_EN,
  AG_GRID_LOCALE_IR,
} from "@ag-grid-community/locale";

const NgoTable = () => {
  const [searchText, setSearchText] = useState("");
  const { theme } = useTheme();
  const { locale } = useParams();
  const t = useTranslations("NGO");

  const [rowData, setRowData] = useState([
    {
      make: "Tesla",
      name: "Model Y",
      country: "Iran",
      activeProjects: 5,
      activityField: "Education and Culture",
      yearOfEstablishment: "2015",
      licenses: true,
    },
    {
      make: "Ford",
      name: "F-Series",
      country: "Iraq",
      activeProjects: 4,
      activityField: "Health & Wellness",
      yearOfEstablishment: "2019",
      licenses: false,
    },
    {
      make: "Toyota",
      name: "Corolla",
      country: "Pakistan",
      activeProjects: 3,
      activityField: "Environment",
      yearOfEstablishment: "2022",
      licenses: true,
    },
  ]);

  const [colDefs, setColDefs] = useState<ColDef[]>([
    {
      headerName: t("Logo"),
      field: "logo",
      cellRenderer: () => (
        <Avatar
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      ),
      maxWidth: 100,
      headerClass: "header-cell",
    },
    {
      headerName: t("Name"),
      field: "name",
    },
    {
      headerName: t("Country"),
      field: "country",
      width: 200,
    },
    {
      headerName: t("Active Projects"),
      field: "activeProjects",
      width: 150,
    },
    {
      headerName: t("Activity Field"),
      field: "activityField",
    },
    {
      headerName: t("Year of establishment"),
      field: "yearOfEstablishment",
      width: 150,
    },
    {
      headerName: t("Licenses"),
      field: "licenses",
      width: 150,
      cellRenderer: (params: any) => {
        return params.value ? "Have Licensed" : "Not Have Licensed";
      },
    },
    {
      headerName: t("Details"),
      field: "details",
      cellRenderer: (params: any) => {
        return (
          <Button
            className="text-gray"
            color="primary"
            size="sm"
            variant="solid"
          >
            {t("Details")}
          </Button>
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
      className={`w-3/4 h-[500px] ${theme === "dark" ? "ag-theme-alpine-dark" : "ag-theme-alpine"}  mb-32`}
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

export default NgoTable;
