"use client";

import { useFormik } from "formik";
import { Textarea } from "@heroui/input";
import { useTranslations } from "next-intl";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { addToast } from "@heroui/toast";

import ProjectDatePicker from "./ProjectDatePicker";
import FormButtons from "./FormButtons";

import { completeProject } from "@/actions/dashboard";
import { useRouter } from "@/i18n/navigation";
import ProjectFiles from "./ProjectFiles";
import { useState } from "react";
import { uploadDocs } from "@/actions/ngo";

function CompleteForm({ id, data }: { id: string; data: any }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const t = useTranslations("dashboard");
  const [documentsAndReportFormData, setDocumentsAndReportFormData] = useState<
    File[]
  >([]);
  const [visualDocuments, setVisualDocuments] = useState<(File | undefined)[]>(
    []
  );

  const router = useRouter();

  // const handleRequest = async (id: string, values: any) => {
  //   const reponse = await completeProject(id, values);

  //   if (reponse?.success) {
  //     formik.resetForm();
  //     setIsLoading(false);

  //     addToast({
  //       title: t("Success"),
  //       description: t("Project completed successfully"),
  //       timeout: 3000,
  //       color: "success",
  //     });
  //     router.push("/dashboard/projects");
  //   } else {
  //     addToast({
  //       title: t("Error"),
  //       description: t("Failed to complete project"),
  //       timeout: 3000,
  //       color: "danger",
  //     });
  //   }
  // };

  const mutation = useMutation<void, unknown, { values: any; id: string }>({
    mutationKey: ["completePrject", id],
    mutationFn: async ({ values, id }: { values: any; id: string }) =>
      await completeProject(values, id),
    onSuccess: (reponse: any) => {
      if (reponse?.success) {
        formik.resetForm();

        addToast({
          title: t("Success"),
          description: t("Project completed successfully"),
          shouldShowTimeoutProgress: true,
          variant: 'flat',
          timeout: 3000,
          color: "success",
        });
        router.push("/dashboard/projects");
      } else {
        addToast({
          title: t("Error"),
          description: data?.error,
          shouldShowTimeoutProgress : true,
          variant : 'flat',
          timeout: 3000,
          color: "danger",
        });
      }
      setIsLoading(false);
    },
  });

  const formik = useFormik({
    initialValues: {
      endDate: "",
      achivements: "",
      completedReports: "",
      completedEffects: "",
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
      id,
    },
    validationSchema: Yup.object().shape({
      endDate: Yup.string().required(t("End date is required")),
      achivements: Yup.string()
        .required("Achivements is required")
        .min(200, "Achivements must be at least 200 characters"),
      completedReports: Yup.string()
        .required("Completed Reports is required")
        .min(200, "Completed Reports must be at least 200 characters"),
      completedEffects: Yup.string()
        .required("Impact on the protection of intangible heritage is required")
        .min(
          200,
          "Impact on the protection of intangible heritage must be at least 200 characters"
        ),
    }),
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

      const formDataVisualDocuments = new FormData();

      const filterVisualDocuments = visualDocuments?.filter(
        (f) => typeof f !== "undefined"
      );

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

      cpValues.documentsAndReport = {
        title: values.documentsAndReportTitle,
        files: values.documentsAndReportFiles,
      };

      delete cpValues.documentsAndReportTitle;
      delete cpValues.documentsAndReportFiles;
      delete cpValues.visualDocuments1;
      delete cpValues.visualDocuments2;
      delete cpValues.visualDocuments3;
      delete cpValues.visualDocuments4;

      mutation.mutate({ values: cpValues, id });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="my-4">
        <Textarea
          isClearable
          isRequired
          errorMessage={() => {
            if (formik.errors.achivements && formik.touched.achivements) {
              return t(formik.errors.achivements);
            }
          }}
          isInvalid={formik.errors.achivements ? true : false}
          label={t("Achivements")}
          maxRows={12}
          minRows={6}
          {...formik.getFieldProps("achivements")}
        />
      </div>
      <div className="my-4">
        <Textarea
          isClearable
          isRequired
          errorMessage={() => {
            if (
              formik.errors.completedReports &&
              formik.touched.completedReports
            ) {
              return t(formik.errors.completedReports);
            }
          }}
          isInvalid={formik.errors.completedReports ? true : false}
          label={t("Completed Reports")}
          maxRows={12}
          minRows={6}
          {...formik.getFieldProps("completedReports")}
        />
      </div>
      <div className="my-4">
        <Textarea
          isClearable
          isRequired
          errorMessage={() => {
            if (
              formik.errors.completedEffects &&
              formik.touched.completedEffects
            ) {
              return t(formik.errors.completedEffects);
            }
          }}
          isInvalid={formik.errors.completedEffects ? true : false}
          label={t("Completed Effects")}
          maxRows={12}
          minRows={6}
          {...formik.getFieldProps("completedEffects")}
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-4 px-4 md:px-0 mt-10">
        <ProjectDatePicker formik={formik} label="End Date" name="endDate" />
      </div>
      <ProjectFiles
        files={documentsAndReportFormData}
        formik={formik}
        visualDocuments={visualDocuments}
        onFiles={setDocumentsAndReportFormData}
        onSingleFile={setVisualDocuments}
      />
      <div className="my-10">
        <FormButtons
          isDisabled={formik.values.achivements.length ? false : true}
          isLoading={mutation.isPending || isLoading}
        />
      </div>
    </form>
  );
}

export default CompleteForm;
