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
import { Icon } from "@iconify/react";
import { Tooltip } from "@heroui/tooltip";

import { SearchIcon } from "../common/icons";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // or any other theme you prefer

const DocumentsTable = ({ data }: { data: any }) => {
  const [searchText, setSearchText] = useState("");
  const { theme } = useTheme();
  const { locale } = useParams();
  const t = useTranslations("dashboard");

  console.log("ffffffff", data);

  const [colDefs, setColDefs] = useState<ColDef[]>([
    {
      headerName: t("NGO Name"),
      field: "name",
    },
    {
      headerName: t("Email"),
      field: "email",
      width: 200,
    },
    {
      headerName: t("Interface Name"),
      field: "interfaceName",
    },
    {
      headerName: t("Phone"),
      field: "phone",
    },
    {
      headerName: t("Document Type"),
      field: "type",
    },
    {
      headerName: t("Title"),
      field: "title",
    },
    {
      headerName: t("Description Doc"),
      field: "description",
    },

    {
      headerName: t("Actions"),
      field: "actions",
      cellRenderer: () => {
        return (
          <Tooltip color="danger" content="Delete Documents">
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
        rowData={data}
      />
    </div>
  );
};

export default DocumentsTable;
