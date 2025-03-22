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
import { createProject } from "@/server/dashboard";
import { uploadDocs } from "@/server/ngo";

function ProjectForm() {
  const [documentsAndReportFormData, setDocumentsAndReportFormData] = useState<
    []
  >([]);

  const [visualDocuments, setVisualDocuments] = useState<[]>([]);

  const t = useTranslations("dashboard");

  const mutation = useMutation({
    mutationKey: ["createProject"],
    mutationFn: createProject,
    onSuccess: (data) => {
      console.log("ddddddddddd", data);
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
      documentsAndReport: { title: "", files: [] },
      visualDocuments: [] as { title: string; files: string[] }[],
      visualDocuments1: "",
      visualDocuments2: "",
      visualDocuments3: "",
      visualDocuments4: "",
      moreInformation: "",
    },
    // validationSchema: ProjectSchema,
    onSubmit: async (values) => {
      console.log("cccccc", values);
      console.log("cccccc", documentsAndReportFormData);
      console.log("cccccc", visualDocuments);
      // handle form submission

      // const
      // const formData = new FormData();

      // documentsAndReportFormData.forEach((value) => {
      //   formData.append("picture", value);
      // });

      // const uploadDocumentsAndReportFormData = await uploadDocs(formData);

      // if (uploadDocumentsAndReportFormData.success) {
      //   values.documentsAndReport.title =
      //     uploadDocumentsAndReportFormData.data.title;
      //   values.documentsAndReport.files = uploadDocumentsAndReportFormData.data;
      // }

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
          values.visualDocuments.push({
            title: `visualDocuments${index + 1}`,
            files: [value],
          });
        });
        console.log("cccccc", uploadVisualDocuments);
        console.log("cccccc", values);
      }

      mutation.mutate(values);
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
        <FormButtons isLoading={mutation.isPending} />
      </div>
    </form>
  );
}

export default ProjectForm;
