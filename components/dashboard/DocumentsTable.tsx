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
import { useDisclosure } from "@heroui/modal";
import { useMutation } from "@tanstack/react-query";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";

import ConfirmModal from "../common/confirm";
import { SearchIcon } from "../common/icons";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // or any other theme you prefer
import { deleteDocument } from "@/actions/dashboard";
import AddButton from "./AddButton";

const DocumentsTable = ({ data }: { data: any }) => {
  const [id, setId] = useState<string>("");
  const [searchText, setSearchText] = useState("");
  const { theme } = useTheme();
  const { locale } = useParams();
  const t = useTranslations("dashboard");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteMutation = useMutation({
    mutationKey: ["deleteDocument"],
    mutationFn: deleteDocument,
    onSuccess: (data) => {
      if (data.success) {
        addToast({
          title: t("Success"),
          description: t("Document deleted successfully"),
          timeout: 3000,
          color: "success",
        });
      } else {
        addToast({
          title: t("Error"),
          description: t("Failed to delete document"),
          timeout: 3000,
          color: "danger",
        });
      }
      onClose();
    },
  });

  const handleConfirm = (value: string) => {
    if (value === "delete") {
      deleteMutation.mutate(id);
    }
  };

  const [colDefs] = useState<ColDef[]>([
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
      cellRenderer: (params: { data: { _id: string } }) => {
        const id: string = params?.data?._id;

        return (
          <div className="flex gap-3">
            <Tooltip color="danger" content={t("Delete Project")}>
              <Button
                isIconOnly
                color="danger"
                size="sm"
                variant="flat"
                onPress={() => {
                  setId(id);
                  onOpen();
                }}
              >
                <Icon
                  className="text-danger"
                  height="24"
                  icon="mdi-light:delete"
                  width="24"
                />
              </Button>
            </Tooltip>
            <Tooltip color="warning" content={t("Update Document")}>
              <Link href={`documents/update-document/${id}`}>
                <Button isIconOnly color="warning" size="sm" variant="flat">
                  <Icon
                    className="text-warning"
                    height="24"
                    icon="material-symbols:update"
                    width="24"
                  />
                </Button>
              </Link>
            </Tooltip>
          </div>
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
      <div className="flex gap-2 items-center justify-between p-4">
        <Input
          className="my-2 flex-1"
          placeholder={t("Search")}
          startContent={<SearchIcon />}
          type="text"
          value={searchText}
          variant="bordered"
          onChange={onSearchChange}
        />
        <AddButton />
      </div>
      <AgGridReact
        paginationAutoPageSize
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

      <ConfirmModal
        isLoading={deleteMutation.isPending}
        isOpen={isOpen}
        message={t("Are you sure you want to delete this document?")}
        title={t("Delete Decument")}
        onClose={onClose}
        onConfirm={() => handleConfirm("delete")}
      />
    </div>
  );
};

export default DocumentsTable;
