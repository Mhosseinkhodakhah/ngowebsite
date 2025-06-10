"use client";

import { addToast } from "@heroui/toast";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { Divider } from "@heroui/divider";

import NgoPublishDocumentFiles from "./NgoPublishDocumentFiles";
import UploadSection from "./UploadSection";
import GlobalInfo from "./GlobalInfo";
import ActivityField from "./ActivityField";
import AreaActivity from "./AreaActivity";
import ActivityCommunity from "./ActivityCommunity";
import ActivitySpeceficField from "./ActivitySpeceficField";
import ActivityAreaExpertise from "./ActivityAreaExpertise";
import ActivityPopulationConcentration from "./ActivityPopulationConcentration";
import ActivityAgeRange from "./ActivityAgeRange";
import SocialMediaLinks from "./SocialMediaLinks";
import DescriptionField from "./DescriptionField";
import CooperateCheck from "./CooperateCheck";
import ActivityLicense from "./ActivityLicense";
import NgoDocuments from "./NgoDocuments";
import NgoPublishDocument from "./NgoPublishDocument";
import ConditionAndConfirm from "./ConditionAndConfirm";
import LoginData from "./LoginData";
import FormButtons from "./FormButtons";
import ContactFields from "./ContactFields";
import IsPermitedForPublish from "./PermitPage";

import { ngoRegisterSchema } from "@/utils/validations";
import { INGO } from "@/types/ngo-types";
import { NogsRegisteration, uploadDocs } from "@/actions/ngo";
import { useRouter } from "@/i18n/navigation";

function RegistrationForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const t = useTranslations("ngo-registration");
  const router = useRouter();

  const [logo, setLogo] = useState<FormData>(new FormData());
  const [documentsFile, setDocumentsFile] = useState<FormData>(new FormData());
  const [publishFile, setPublishFile] = useState<FormData>(new FormData());

  const mutation = useMutation({
    mutationKey: ["NogsRegisteration"],
    mutationFn: NogsRegisteration,
    onSuccess: (data: any) => {
      if (data.success) {
        addToast({
          title : t("Success"),
          description : t("create ngo successfully done"),
          timeout : 3000,
          shouldShowTimeoutProgress : true,
          variant : 'flat',
          color : 'success'
        })
        router.push("/login");
        formik.resetForm();
      } else {
        addToast({
          title: t("Registration"),
          description: data?.error,
          timeout : 3000,
          shouldShowTimeoutProgress : true,
          variant : 'flat',
          color: "danger",
        });
      }
      setIsLoading(false);
    },
  });

  const formik = useFormik<INGO>({
    initialValues: {
      name: "",
      nationalId: "",
      establishmentYear: "",
      activityField: [] as string[],
      otherActivityField: "",
      country: "",
      city: "",
      address: "",
      postal: "",
      phone: "",
      code: "",
      email: "",
      website: "",
      areaAndScope: [] as string[],
      otherAreaAndScope: "",
      specificCultureGroupValue: [],
      specificCultureGroupDescription: "",
      specificCultureGroup: {
        has: false,
        description: "",
      },
      specificActiveAreas: [],
      areaOfExpertise: [] as string[],
      areaOfExpertiseValue: "",
      populationConcentration: [] as string[],
      populationConcentrationValue: "",
      group: [],
      additionalInformation: "",
      socialMedia: {
        instagram: "",
        telegram: "",
        linkedIn: "",
      },
      instagram: "",
      telegram: "",
      linkedIn: "",
      cooperationSelect: [],
      cooperation: false,
      licenseValue: [],
      licenseDescription: "",
      callPermition: false,
      locationPermition: false,
      license: {
        has: false,
        description: "",
      },
      expiryDate: "",
      documents: [],
      publishSelect: [] as string[],
      publishValue: "",
      publish: {
        status: 0,
        description: "",
      },
      publishImages: [] as string[],
      conditonAndConfirm: [],
      logo: "",
      documentsFile: [],
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: ngoRegisterSchema,
    onSubmit: async (values) => {
      if (logo.get("picture") === null) {
        addToast({
          title: t("Logo"),
          description: t(
            "Please choose a logo for your organization This is required"
          ),
          promise: new Promise((resolve) => setTimeout(resolve, 3000)),
          color: "danger",
        });

        return;
      }
      if (documentsFile.get("picture") === null) {
        addToast({
          title: t("Upload Documentation"),
          description: t(
            "Please select your organization's documents This is required"
          ),
          promise: new Promise((resolve) => setTimeout(resolve, 3000)),
          color: "danger",
        });

        return;
      }

      if (values?.publishSelect[0] !== "no") {
        if (publishFile.get("picture") === null) {
          addToast({
            title: t("Upload Files"),
            description: t("Please select your public images"),
            promise: new Promise((resolve) => setTimeout(resolve, 3000)),
            color: "danger",
          });

          return;
        }
      }

      setIsLoading(true);

      const uploadLogo = await uploadDocs(logo);
      const uploadDocuments = await uploadDocs(documentsFile);

      if (uploadLogo.success) {
        values.logo = uploadLogo.data[0];
      } else {
        addToast({
          title: t("Logo"),
          description: t("Logo failed to load, please try again"),
          promise: new Promise((resolve) => setTimeout(resolve, 3000)),
          color: "danger",
        });
        setIsLoading(false);

        return;
      }
      if (uploadDocuments.success) {
        values.documentsFile = uploadDocuments.data;
      } else {
        addToast({
          title: t("Documents"),
          description: t("Documents failed to load, please try again"),
          promise: new Promise((resolve) => setTimeout(resolve, 3000)),
          color: "danger",
        });
        setIsLoading(false);

        return;
      }

      if (values?.publishSelect[0] !== "no") {
        const uploadPublish = await uploadDocs(publishFile);

        if (uploadPublish.success) {
          values.publishImages = uploadPublish.data;
        } else {
          addToast({
            title: t("Public images"),
            description: t("Public images failed to load, please try again"),
            promise: new Promise((resolve) => setTimeout(resolve, 3000)),
            color: "danger",
          });
          setIsLoading(false);

          return;
        }
      }

      if (values.activityField[0] === "other") {
        values.activityField[0] = values.otherActivityField;
      }

      if (values.areaAndScope[0] === "other") {
        values.areaAndScope[0] = values.otherAreaAndScope;
      }

      if (values.areaOfExpertise[0] === "other") {
        values.areaOfExpertise[0] = values.areaOfExpertiseValue;
      }

      if (values.populationConcentration[0] === "other") {
        values.populationConcentration[0] = values.populationConcentrationValue;
      }

      values.specificCultureGroup = {
        has: values.specificCultureGroupValue[0] === "yes" ? true : false,
        description: values.specificCultureGroupDescription,
      };

      values.socialMedia = {
        instagram: values.instagram,
        telegram: values.telegram,
        linkedIn: values.linkedIn,
      };

      values.cooperation = values.cooperationSelect[0] === "yes" ? true : false;
      values.license = {
        has: values.licenseValue[0] === "yes" ? true : false,
        description: values.licenseDescription,
      };

      values.publish = {
        status:
          values.publishValue[0] === "no"
            ? 0
            : values.publishValue[0] === "yes"
              ? 1
              : 2,
        description: values.publishValue,
      };

      const cpValues: Partial<typeof values> = { ...values };

      delete cpValues.areaOfExpertiseValue;

      delete cpValues.cooperationSelect;
      delete cpValues.licenseDescription;
      delete cpValues.licenseValue;
      delete cpValues.otherActivityField;
      delete cpValues.otherAreaAndScope;
      delete cpValues.populationConcentrationValue;
      delete cpValues.publishSelect;
      delete cpValues.publishValue;
      delete cpValues.specificCultureGroupDescription;
      delete cpValues.specificCultureGroupValue;
      delete cpValues.telegram;
      delete cpValues.instagram;
      delete cpValues.linkedIn;

      mutation.mutate(cpValues);
    },
  });

  return (
    <form
      className="w-full md:w-2/3 mt-20 "
      data-aos="fade-up"
      data-aos-duration="1000"
      onSubmit={formik.handleSubmit}
    >
      <GlobalInfo formik={formik} />
      <Divider className="my-5" />
      <ActivityField formik={formik} />
      <ContactFields formik={formik} />
      <Divider className="my-5" />
      {/*  its created for geting permition of ngo for sharing their call and location data */}
      <Divider className="my-5" />
      <AreaActivity formik={formik} />
      <ActivityCommunity formik={formik} />
      <ActivitySpeceficField formik={formik} />
      <Divider className="my-5" />
      <ActivityAreaExpertise formik={formik} />
      <Divider className="my-5" />
      <ActivityPopulationConcentration formik={formik} />
      <ActivityAgeRange formik={formik} />
      <Divider className="my-5" />
      <DescriptionField formik={formik} />
      <Divider className="my-5" />
      <SocialMediaLinks formik={formik} />
      <CooperateCheck formik={formik} />
      <Divider className="my-5" />
      <ActivityLicense formik={formik} />
      <Divider className="my-5" />
      <NgoDocuments formik={formik} />
      <UploadSection onDocumentsFile={setDocumentsFile} onLogo={setLogo} />
      <Divider className="my-5" />
      <NgoPublishDocument formik={formik} />
      {formik?.values?.publishSelect[0] === "limited" && (
        <IsPermitedForPublish formik={formik} />
      )}

      {formik?.values?.publishSelect[0] !== "no" ? (
        <NgoPublishDocumentFiles publishFile={publishFile} onPublishFile={setPublishFile} />
      ) : null}
      <Divider className="my-5" />
      <LoginData formik={formik} />
      <Divider className="my-5" />
      <ConditionAndConfirm formik={formik} />
      <Divider className="my-5" />
      <FormButtons
        isDisabled={!!formik.values.name.length}
        isLoading={isLoading || mutation.isPending}
      />
    </form>
  );
}

export default RegistrationForm;
