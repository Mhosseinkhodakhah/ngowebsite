"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Textarea } from "@heroui/input";
import { FormikErrors, useFormik } from "formik";

import CInput from "../common/cinput";
import NumberInput from "../ngo-registration/NumberInput";

import UploadDocumentsSection from "./UploadDocumentsSection";
import FormButtons from "./FormButtons";

import { documentSchema } from "@/utils/validations";
import { uploadDocs } from "@/server/ngo";
import { useMutation } from "@tanstack/react-query";
import { createDocument } from "@/server/dashboard";

function DocumentsAndRecordsForm() {
  const t = useTranslations("dashboard");
  const [documents, setDocuments] = useState<FormData>(new FormData());

  const mutation = useMutation({
    mutationKey: ["createDocument"],
    mutationFn: createDocument,
    onSuccess: (data) => {
      console.log("ddddddddddd", data);
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      interfaceName: "",
      phone: "",
      type: [],
      file: [],
      title: "",
      description: "",
    },
    validationSchema: documentSchema,
    onSubmit: async (values) => {
      const upload = await uploadDocs(documents);

      if (upload.success) {
        values.file = upload.data;
      } else {
        // Handle error
        console.error("Failed to upload documents:", upload.error);

        return;
      }

      mutation.mutate(values);
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
          label={t("Description Doc")}
          {...formik.getFieldProps("description")}
        />
        <UploadDocumentsSection onDocuments={setDocuments} />
        <FormButtons isLoading={mutation.isPending} />
      </div>
    </form>
  );
}

export default DocumentsAndRecordsForm;
