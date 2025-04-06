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

function CompleteForm({ id }: { id: string }) {
  const t = useTranslations("dashboard");

  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ["completePrject"],
    mutationFn: completeProject,
    onSuccess: (data: any) => {
      if (data?.success) {
        formik.resetForm();
        addToast({
          title: t("Success"),
          description: t("Project completed successfully"),
          timeout: 3000,
          color: "success",
        });
        router.push("/dashboard/projects");
      } else {
        addToast({
          title: t("Error"),
          description: t("Failed to complete project"),
          timeout: 3000,
          color: "danger",
        });
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      endDate: "",
      achivements: "",
      id,
    },
    validationSchema: Yup.object().shape({
      endDate: Yup.string().required(t("End date is required")),
      achivements: Yup.string()
        .required("Achivements is required")
        .min(200, "Achivements must be at least 200 characters"),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-4 px-4 md:px-0">
        <ProjectDatePicker formik={formik} label="End Date" name="endDate" />
      </div>
      <div className="my-4">
        <Textarea
          isClearable
          isRequired
          className="h-40"
          errorMessage={() => {
            if (formik.errors.achivements && formik.touched.achivements) {
              return t(formik.errors.achivements);
            }
          }}
          isInvalid={formik.errors.achivements ? true : false}
          label={t("Achivements")}
          {...formik.getFieldProps("achivements")}
        />
      </div>
      <div className="my-10">
        <FormButtons
          isDisabled={formik.values.achivements.length ? false : true}
          isLoading={mutation.isPending}
        />
      </div>
    </form>
  );
}

export default CompleteForm;
