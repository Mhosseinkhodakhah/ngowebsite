"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Textarea } from "@heroui/input";
import { FormikErrors, useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { addToast } from "@heroui/toast";

import CInput from "../common/cinput";
import NumberInput from "../ngo-registration/NumberInput";

import UploadDocumentsSection from "./UploadDocumentsSection";
import FormButtons from "./FormButtons";

import { documentSchema } from "@/utils/validations";
import { uploadDocs } from "@/actions/ngo";
import { createDocument } from "@/actions/dashboard";
import { useRouter } from "@/i18n/navigation";
import useStore from "@/store";

function DocumentsAndRecordsForm() {
  const t = useTranslations("dashboard");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [documents, setDocuments] = useState<File[]>([]);

  const router = useRouter();
  const ngo: any = useStore((state) => state.ngo);

  const mutation = useMutation({
    mutationKey: ["createDocument"],
    mutationFn: createDocument,
    onSuccess: (response: any) => {
      if (response?.success) {
        addToast({
          title: t("Success"),
          description: t("Document created successfully"),
          shouldShowTimeoutProgress: true,
          variant: "flat",
          promise: new Promise((resolve) => setTimeout(resolve, 3000)),
          color: "success",
        });
        setDocuments([]);
        formik.resetForm();
        router.push("/dashboard/documents");
      } else {
        addToast({
          title: t("Error"),
          description: response?.error,
          timeout: 3000,
          shouldShowTimeoutProgress: true,
          variant: "flat",
          color: "danger",
        });
      }
      setIsLoading(false);
    },
  });

  const formik = useFormik({
    initialValues: {
      name: ngo?.name,
      email: ngo?.email,
      interfaceName: "",
      phone: ngo?.phone,
      type: [],
      file: [],
      title: "",
      description: "",
    },
    enableReinitialize: true,
    validationSchema: documentSchema,
    onSubmit: async (values) => {
      if (documents.length > 0) {
        setIsLoading(true);
        const formData = new FormData();

        for (let i = 0; i < documents.length; i++) {
          formData.append("picture", documents[i]);
        }

        const upload = await uploadDocs(formData);

        if (upload.success) {
          console.log("upload", console.log(upload));
          console.log("formData", console.log(formData.getAll("picture")));

          mutation.mutate({ ...values, file: upload.data });

          return;
        } else {
          addToast({
            title: t("Error"),
            description: upload.error,
            promise: new Promise((resolve) => setTimeout(resolve, 3000)),
            color: "danger",
          });

          setIsLoading(false);

          return;
        }
      } else {
        addToast({
          title: t("Error"),
          description: t("Please upload the documents file"),
          promise: new Promise((resolve) => setTimeout(resolve, 3000)),
          color: "danger",
        });
        setIsLoading(false);

        return;
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0">
        <CInput
          isRequired
          formik={formik}
          label="NGO Name"
          name="name"
          page="dashboard"
        />
        <CInput
          isRequired
          formik={formik}
          label="Email"
          name="email"
          page="dashboard"
        />
        <CInput
          formik={formik}
          isRequired={false}
          label="Interface Name"
          name="interfaceName"
          page="dashboard"
        />
        <NumberInput
          formik={formik}
          isRequired={false}
          label="Phone"
          name="phone"
          page="dashboard"
        />
      </div>
      <div className="px-4 md:px-0">
        <CheckboxGroup
          isRequired
          className="px-4 md:px-0 mt-8"
          defaultValue={formik.values.type}
          errorMessage={
            formik.errors.type &&
            t(formik.errors.type as unknown as FormikErrors<any>)
          }
          label={t("Document Type")}
          {...formik.getFieldProps("type")}
          onChange={(value: string[]) => {
            formik.setFieldValue("type", value);
          }}
        >
          <Checkbox className="my-1" value="image">
            {t("Image")}
          </Checkbox>
          <Checkbox className="my-1" value="word">
            {t("Word File")}
          </Checkbox>
          <Checkbox className="my-1" value="pdf">
            {t("PDF")}
          </Checkbox>
          <Checkbox className="my-1" value="video">
            {t("Video")}
          </Checkbox>
        </CheckboxGroup>
        <CInput
          isRequired
          className="w-2/3 my-2"
          formik={formik}
          label="Title"
          name="title"
          page="dashboard"
        />
        <Textarea
          isClearable
          isRequired
          errorMessage={() => {
            if (formik.errors.description) {
              return t(formik.errors.description);
            }
          }}
          isInvalid={formik.errors.description ? true : false}
          label={t("Description Doc")}
          {...formik.getFieldProps("description")}
        />
        <UploadDocumentsSection onDocuments={setDocuments} />
        <FormButtons
          isDisabled={mutation.isPending}
          isLoading={mutation.isPending || isLoading}
        />
      </div>
    </form>
  );
}

export default DocumentsAndRecordsForm;
