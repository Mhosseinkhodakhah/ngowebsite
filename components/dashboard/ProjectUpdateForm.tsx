/* eslint-disable prettier/prettier */
"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useFormik } from "formik";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";

import CInput from "../common/cinput";

import FormButtons from "./FormButtons";
import ProjectGeneralInfo from "./ProjectGeneralInfo";
import ProjectStatus from "./ProjectStatus";
import ProjectManagerData from "./ProjectManagerData";
import ProjectTarget from "./ProjectTarget";
import ProjectFiles from "./ProjectFiles";
import ProjectCountry from "./ProjectCountry";

import { ProjectSchema } from "@/utils/validations";
import { updateProject } from "@/actions/dashboard";
import { uploadDocs } from "@/actions/ngo";
import { useRouter } from "@/i18n/navigation";

function UpdateProjectForm({ data }: { data: any }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [documentsAndReportFormData, setDocumentsAndReportFormData] = useState<
    File[]
  >([]);

  const [visualDocuments, setVisualDocuments] = useState<(File | undefined)[]>(
    []
  );

  const t = useTranslations("dashboard");

  const router = useRouter();

  const mutation = useMutation<void, unknown, { values: any; id: string }>({
    mutationKey: ["updateProject"],
    mutationFn: async ({ values, id }: { values: any; id: string }) =>
      await updateProject(values, id),
    onSuccess: (data: any) => {
      if (data.success) {
        formik.resetForm();
        addToast({
          title: t("Success"),
          description: t("Project updated successfully"),
          shouldShowTimeoutProgress : true,
          variant : 'flat',
          timeout: 3000,
          color: "success",
        });
        setDocumentsAndReportFormData([]);
        setVisualDocuments([]);
        router.push("/dashboard/projects");
      } else {
        addToast({
          title: t("Error"),
          shouldShowTimeoutProgress : true,
          variant : 'flat',
          description: data?.error,
          timeout: 3000,
          color: "danger",
        });
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      name: data?.name,
      startDate: data?.startDate,
      description: data?.description,
      status: data?.status as string[],
      country: data?.location?.country,
      city: data?.location?.city,
      location: {
        country: data?.location?.country,
        city: data?.location?.city,
      },
      organizationName: data?.organizationName,
      projectManagerName: data?.projectManagerName,
      projectManagerEmail: data?.projectManagerEmail,
      projectManagerPhone: data?.projectManagerPhone,
      colleaguesAndStakeholders: data?.colleaguesAndStakeholders,
      goalAndAchievements: data?.goalAndAchievements,
      otherGoalAndAchievements:
        data?.goalAndAchievements.length > 1
          ? data?.goalAndAchievements[1]
          : "",
      documentsAndReportTitle: data?.documentsAndReport?.title,
      documentsAndReportFiles: data?.documentsAndReport?.files as string[],
      documentsAndReport: {
        title: data?.documentsAndReport?.title,
        files: data?.documentsAndReport?.files as string[],
      },
      visualDocuments1: data?.visualDocuments[0]?.title,
      visualDocuments2: data?.visualDocuments[1]?.title,
      visualDocuments3: data?.visualDocuments[2]?.title,
      visualDocuments4: data?.visualDocuments[3]?.title,
      visualDocuments: [
        {
          title: data?.visualDocuments[0]?.title,
          files: data?.visualDocuments[0]?.files,
        },
        {
          title: data?.visualDocuments[1]?.title,
          files: data?.visualDocuments[1]?.files,
        },
        {
          title: data?.visualDocuments[2]?.title,
          files: data?.visualDocuments[2]?.files,
        },
        {
          title: data?.visualDocuments[3]?.title,
          files: data?.visualDocuments[3]?.files,
        },
      ] as { title: string; files: string[] }[],
      moreInformation: data?.moreInformation,
    },
    validationSchema: ProjectSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsLoading(true);

      const formDataDocumentAndReport = new FormData();

      if (documentsAndReportFormData.length === 1) {
        if (documentsAndReportFormData[0]) {
          formDataDocumentAndReport.append(
            "picture",
            documentsAndReportFormData[0]
          );
        }
        const uploadDocumentAndReport = await uploadDocs(
          formDataDocumentAndReport
        );

        if (uploadDocumentAndReport.success) {
          values.documentsAndReportFiles = uploadDocumentAndReport.data;
        }
      } else if (documentsAndReportFormData.length > 1) {
        documentsAndReportFormData.forEach((value) => {
          formDataDocumentAndReport.append("picture", value);
        });

        const uploadDocumentAndReport = await uploadDocs(
          formDataDocumentAndReport
        );

        if (uploadDocumentAndReport.success) {
          values.documentsAndReportFiles = uploadDocumentAndReport.data;
        }
      }

      const filterVisualDocuments = visualDocuments?.filter(
        (f) => typeof f !== "undefined"
      );

      const formDataVisualDocuments = new FormData();

      filterVisualDocuments.forEach((value) => {
        formDataVisualDocuments.append("picture", value);
      });

      if (filterVisualDocuments) {
        const uploadVisualDocuments = await uploadDocs(formDataVisualDocuments);

        if (uploadVisualDocuments.success) {
          uploadVisualDocuments.data.forEach((value: string, index: number) => {
            values.visualDocuments[index] = {
              title: values.visualDocuments[index].title,
              files: [value],
            };
          });
        }
      }

      const cpValues = { ...values } as {
        -readonly [K in keyof typeof values]+?: (typeof values)[K];
      };

      if (values?.otherGoalAndAchievements.length) {
        if (
          cpValues.goalAndAchievements &&
          cpValues.goalAndAchievements[0] === "other"
        ) {
          cpValues.goalAndAchievements[1] =
            values.otherGoalAndAchievements as string;
        }
      }

      cpValues.location = {
        country: values.country,
        city: values.city,
      };

      cpValues.documentsAndReport = {
        title: values.documentsAndReportTitle,
        files: values.documentsAndReportFiles,
      };

      delete cpValues.country;
      delete cpValues.city;
      delete cpValues.documentsAndReportTitle;
      delete cpValues.documentsAndReportFiles;
      delete cpValues.visualDocuments1;
      delete cpValues.visualDocuments2;
      delete cpValues.visualDocuments3;
      delete cpValues.visualDocuments4;

      setIsLoading(false);

      mutation.mutate({ values: cpValues, id: data?._id });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <ProjectGeneralInfo formik={formik} />
      <ProjectStatus formik={formik} />

      <h5 className="py-4 px-4 md:px-0 mt-4">{t("Geographical location")}</h5>
      <div className="flex gap-4">
        <ProjectCountry formik={formik} />
        <CInput isRequired formik={formik} label="City" name="city" />
      </div>

      <h5 className="py-4 px-4 md:px-0 mt-4">
        {t("Implementer and Stakeholders")}
      </h5>
      <CInput
        isRequired
        className="md:w-2/3"
        formik={formik}
        label="Organization Name / Executive Entity"
        name="organizationName"
        page="dashboard"
      />
      <ProjectManagerData formik={formik} />

      <ProjectTarget formik={formik} />
      <ProjectFiles
        files={documentsAndReportFormData}
        formik={formik}
        visualDocuments={visualDocuments}
        onFiles={setDocumentsAndReportFormData}
        onSingleFile={setVisualDocuments}
      />
      <h5 className="py-4 px-4 md:px-0 mt-4">{t("More Information")}</h5>
      <CInput
        formik={formik}
        isRequired={false}
        label="Link for additional information"
        name="moreInformation"
        page="dashboard"
      />
      <div className="my-10">
        <FormButtons
          isDisabled={formik.values.name.length ? false : true}
          isLoading={mutation.isPending || isLoading}
        />
      </div>
    </form>
  );
}

export default UpdateProjectForm;
