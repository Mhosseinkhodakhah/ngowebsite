"use client";

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
import { Tooltip } from "@heroui/tooltip";
import { useDisclosure } from "@heroui/modal";
import { useMutation } from "@tanstack/react-query";
import { addToast } from "@heroui/toast";

import { SearchIcon } from "../common/icons";
import ConfirmModal from "../common/confirm";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // or any other theme you prefer
import { Link } from "@/i18n/navigation";
import { deleteProject, ongoingProject } from "@/actions/dashboard";

const ProjectTable = ({ data }: { data: any }) => {
  const [id, setId] = useState<string>("");
  const [searchText, setSearchText] = useState("");
  const { theme } = useTheme();
  const { locale } = useParams();
  const t = useTranslations("dashboard");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDel,
    onOpen: onOpenDel,
    onClose: onCloseDel,
  } = useDisclosure();

  const onGoingMutation = useMutation({
    mutationKey: ["ongoingProject"],
    mutationFn: ongoingProject,
    onSuccess: (data) => {
      if (data.success) {
        addToast({
          title: t("Success"),
          description: t("Project status changed to ongoing"),
          timeout: 3000,
          color: "success",
        });
      } else {
        addToast({
          title: t("Error"),
          description: t("Failed to change project status"),
          timeout: 3000,
          color: "danger",
        });
      }
      onClose();
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ["deleteProject"],
    mutationFn: deleteProject,
    onSuccess: (data) => {
      if (data.success) {
        addToast({
          title: t("Success"),
          description: t("Project deleted successfully"),
          timeout: 3000,
          color: "success",
        });
      } else {
        addToast({
          title: t("Error"),
          description: t("Failed to delete project"),
          timeout: 3000,
          color: "danger",
        });
      }
      onCloseDel();
    },
  });

  const handleConfirm = (value: string) => {
    if (value === "ongoing") {
      onGoingMutation.mutate(id);
    }

    if (value === "delete") {
      deleteMutation.mutate(id);
    }
  };

  const [colDefs, setColDefs] = useState<ColDef[]>([
    {
      headerName: t("Project Name"),
      field: "name",
    },
    {
      headerName: t("Project Status"),
      field: "status",
      width: 200,
      cellRenderer: (params: any) => {
        return (
          <>
            {params?.value[0] === "goodPractice"
              ? t("Good Practice")
              : params?.value[0] === "ongoing"
                ? t("Ongoing")
                : params?.value[0] === "completed"
                  ? t("Completed")
                  : params?.value[0] === "collaborationOpportunities"
                    ? t("Collaboration Opportunities")
                    : t("")}
          </>
        );
      },
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
      cellRenderer: (params: { data: { _id: string; status: string[] } }) => {
        const id: string = params?.data?._id;
        const completed: boolean = params?.data?.status.includes("completed");
        const ongoing: boolean =
          !params?.data?.status.includes("ongoing") &&
          !params?.data?.status.includes("completed");

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
                  onOpenDel();
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
            <Tooltip color="warning" content={t("Update Project")}>
              <Link href={`projects/update-project/${id}`}>
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
            {!completed && (
              <Tooltip color="success" content={t("Complete")}>
                <Link href={`projects/complete-project/${id}`}>
                  <Button isIconOnly color="success" size="sm" variant="flat">
                    <Icon
                      className="text-green-500"
                      height="24"
                      icon="lets-icons:done-ring-round-fill"
                      width="24"
                    />
                  </Button>
                </Link>
              </Tooltip>
            )}
            {ongoing && (
              <Tooltip color="success" content={t("Ongoing")}>
                <Button
                  isIconOnly
                  color="success"
                  size="sm"
                  variant="flat"
                  onPress={() => {
                    setId(id);
                    onOpen();
                  }}
                >
                  <Icon
                    className="text-indigo-500"
                    height="24"
                    icon="icon-park-solid:play"
                    width="24"
                  />
                </Button>
              </Tooltip>
            )}
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
    sortable: true,
    resizable: true,
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
        rowData={data ?? []}
      />

      <ConfirmModal
        isLoading={onGoingMutation.isPending}
        isOpen={isOpen}
        message={t("Are you sure you want to ongoing this project?")}
        title={t("Ongoing Project")}
        onClose={onClose}
        onConfirm={() => handleConfirm("ongoing")}
      />

      <ConfirmModal
        isLoading={deleteMutation.isPending}
        isOpen={isOpenDel}
        message={t("Are you sure you want to delete this project?")}
        title={t("Delete Project")}
        onClose={onCloseDel}
        onConfirm={() => handleConfirm("delete")}
      />
    </div>
  );
};

export default ProjectTable;
