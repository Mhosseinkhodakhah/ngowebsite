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
import {
  AG_GRID_LOCALE_EN,
  AG_GRID_LOCALE_IR,
} from "@ag-grid-community/locale";

import { SearchIcon } from "../common/icons";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // or any other theme you prefer
import { useRouter } from "@/i18n/navigation";

const NgoTable = ({ data }: { data: any }) => {
  const [searchText, setSearchText] = useState("");
  const { theme } = useTheme();
  const { locale } = useParams();
  const t = useTranslations("NGO");
  const translate = useTranslations("ngo-registration");
  const router = useRouter();

  const [colDefs] = useState<ColDef[]>([
    {
      headerName: t("Logo"),
      field: "logo",
      cellRenderer: (params: any) => <Avatar size="sm" src={params.value} />,
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
      cellRenderer: (params: any) => {
        return translate(params.value);
      },
    },
    {
      headerName: t("Area And Scope"),
      field: "areaAndScope",
      width: 200,
      cellRenderer: (params: any) => {
        return params.value[0] === "western-asia"
          ? translate("Western Asia")
          : params.value[0] === "central-asia"
            ? "Central Asia"
            : params.value[0];
      },
    },
    {
      headerName: t("Projects"),
      field: "projects",
      width: 150,
      cellRenderer: (params: any) => {
        return params.value.length;
      },
    },
    {
      headerName: t("Activity Field"),
      field: "activityField",
      cellRenderer: (params: any) => {
        return params.value[0] === "language"
          ? translate("Language")
          : params.value[0] === "environment"
            ? translate("Environment")
            : params.value[0] === "education-and-culture"
              ? translate("Education and Culture")
              : params.value[0] === "training"
                ? translate("Training")
                : params.value[0] === "health-and-wellness"
                  ? translate("Health & Wellness")
                  : params.value[0] === "sustainable-development"
                    ? translate("Sustainable development")
                    : params.value[0];
      },
    },
    {
      headerName: t("Year of establishment"),
      field: "establishmentYear",
      width: 150,
    },
    {
      headerName: t("Licenses"),
      field: "licenses",
      width: 150,
      cellRenderer: (params: any) => {
        return params.value?.have ? t("Have Licensed") : t("Not Have Licensed");
      },
    },
    {
      headerName: t("Details"),
      field: "details",
      cellRenderer: (params: any) => {
        const id = params.data._id;

        return (
          <Button
            className="text-gray"
            color="primary"
            size="sm"
            variant="solid"
            onPress={() => router.push(`/ngo/${id}`)}
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
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Input
        className="max-w-sm my-2"
        placeholder={t("Search")}
        startContent={<SearchIcon />}
        type="text"
        value={searchText}
        variant="bordered"
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
        rowData={data || []}
      />
    </div>
  );
};

export default NgoTable;
