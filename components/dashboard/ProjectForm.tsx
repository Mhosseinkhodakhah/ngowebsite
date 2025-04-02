"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useFormik } from "formik";
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
import { createProject } from "@/actions/dashboard";
import { uploadDocs } from "@/actions/ngo";
import { addToast } from "@heroui/toast";
import { useRouter } from "@/i18n/navigation";

function ProjectForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [documentsAndReportFormData, setDocumentsAndReportFormData] = useState<
    []
  >([]);

  const [visualDocuments, setVisualDocuments] = useState<(File | undefined)[]>(
    []
  );

  const t = useTranslations("dashboard");

  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ["createProject"],
    mutationFn: createProject,
    onSuccess: (data) => {
      console.log("ddddddddddd", data);
      if (data.success) {
        formik.resetForm();
        router.push("/dashboard/projects");
      } else {
        addToast({
          title: t("Error"),
          description: t("Failed to create project"),
          timeout: 3000,
          color: "danger",
        });
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      startDate: "",
      endDate: "",
      description: "",
      status: [] as string[],
      country: "",
      city: "",
      location: {
        country: "",
        city: "",
      },
      organizationName: "",
      projectManagerName: "",
      projectManagerEmail: "",
      projectManagerPhone: "",
      colleaguesAndStakeholders: "",
      goalAndAchievements: [],
      otherGoalAndAchievements: "",
      documentsAndReportTitle: "",
      documentsAndReportFiles: [] as string[],
      visualDocuments1: "",
      visualDocuments2: "",
      visualDocuments3: "",
      visualDocuments4: "",
      visualDocuments: [] as { title: string; files: string[] }[],
      moreInformation: "",
    },
    validationSchema: ProjectSchema,
    onSubmit: async (values) => {
      if (documentsAndReportFormData.length === 0) {
        addToast({
          title: t("Error"),
          description: t("Please select the documentation and reports file"),
          timeout: 3000,
          color: "danger",
        });

        return;
      }

      if (visualDocuments.includes(undefined) || visualDocuments.length < 4) {
        addToast({
          title: t("Error"),
          description: t("Please select all visual documents"),
          timeout: 3000,
          color: "danger",
        });

        return;
      }
      setIsLoading(true);

      const filterVisualDocuments = visualDocuments.filter(
        (f) => typeof f !== "undefined"
      );

      const formDataVisualDocuments = new FormData();

      filterVisualDocuments.forEach((value) => {
        formDataVisualDocuments.append("picture", value);
      });

      const uploadVisualDocuments = await uploadDocs(formDataVisualDocuments);

      if (uploadVisualDocuments.success) {
        uploadVisualDocuments.data.forEach((value: string, index: number) => {
          values.visualDocuments[index] = {
            title: values.visualDocuments[index].title,
            files: [value],
          };
        });
      }

      const formDataDocumentAndReport = new FormData();

      documentsAndReportFormData.forEach((value) => {
        formDataDocumentAndReport.append("picture", value);
      });

      const uploadDocumentAndReposrt = await uploadDocs(
        formDataVisualDocuments
      );

      if (uploadDocumentAndReposrt.success) {
        values.documentsAndReportFiles = uploadDocumentAndReposrt.data;
      }

      const cpValues = { ...values } as {
        -readonly [K in keyof typeof values]+?: (typeof values)[K];
      };

      cpValues.location = {
        country: values.country,
        city: values.city,
      };

      delete cpValues.country;
      delete cpValues.city;
      delete cpValues.visualDocuments1;
      delete cpValues.visualDocuments2;
      delete cpValues.visualDocuments3;
      delete cpValues.visualDocuments4;

      setIsLoading(false);

      console.log(cpValues);

      mutation.mutate(cpValues);
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

export default ProjectForm;
