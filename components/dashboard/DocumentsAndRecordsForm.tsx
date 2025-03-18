"use client";

import { useTranslations } from "next-intl";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Textarea } from "@heroui/input";
import { FormikErrors, useFormik } from "formik";

import CInput from "../common/cinput";
import NumberInput from "../ngo-registration/NumberInput";

import UploadDocumentsSection from "./UploadDocumentsSection";
import FormButtons from "./FormButtons";

import { documentSchema } from "@/utils/validations";

function DocumentsAndRecordsForm() {
  const t = useTranslations("dashboard");

  const formik = useFormik({
    initialValues: {
      ngoName: "",
      email: "",
      interfaceName: "",
      documentType: [],
      title: "",
      description: "",
    },
    validationSchema: documentSchema,
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0">
        <CInput
          isRequired
          formik={formik}
          label="NGO Name"
          name="ngoName"
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
          defaultValue={formik.values.documentType}
          errorMessage={
            formik.errors.documentType &&
            t(formik.errors.documentType as unknown as FormikErrors<any>)
          }
          label={t("Document Type")}
          {...formik.getFieldProps("documentType")}
          onChange={(value: string[]) => {
            formik.setFieldValue("documentType", value);
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
        <UploadDocumentsSection />
        <FormButtons />
      </div>
    </form>
  );
}

export default DocumentsAndRecordsForm;
