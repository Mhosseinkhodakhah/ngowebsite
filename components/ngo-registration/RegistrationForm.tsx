"use client";

import { useFormik } from "formik";

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

import { INGO } from "@/types/ngo-types";
import { ngoRegisterSchema } from "@/utils/validations";

function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      nationalId: "",
      establishmentYear: "",
      activityField: [],
      otherActivityField: "",
      country: "",
      city: "",
      address: "",
      postal: "",
      phone: "",
      code: "",
      email: "",
      website: "",
      areaAndScope: [],
      otherAreaAndScope: "",
      specificCultureGroupValue: [],
      specificCultureGroupHas: false,
      specificCultureGroupDescription: "",
      // specificCultureGroup: {
      //   has: false,
      //   description: "",
      // },
      specificActiveAreas: [],
      areaOfExpertise: [],
      areaOfExpertiseValue: "",
      populationConcentration: [],
      populationConcentrationValue: "",
      group: [],
      additionalInformation: "",
      // socialMedia: {
      //   instagram: string;
      //   telegram: string;
      //   linkedIn: string;
      // };
      instagram: "",
      telegram: "",
      linkedin: "",
      cooperation: [],
      licenseValue: [],
      licenseHas: false,
      licenseDescription: "",
      // license: {
      //   has: false,
      //   describtion: "",
      // },
      expiryDate: "",
      documents: [],
      publish: [],
      publishValue: "",
      conditonAndConfirm: [],
    },
    validationSchema: ngoRegisterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="w-full md:w-2/3 mt-20" onSubmit={formik.handleSubmit}>
      <GlobalInfo formik={formik} />
      <ActivityField formik={formik} />
      <ContactFields formik={formik} />
      <AreaActivity formik={formik} />
      <ActivityCommunity formik={formik} />
      <ActivitySpeceficField formik={formik} />
      <ActivityAreaExpertise formik={formik} />
      <ActivityPopulationConcentration formik={formik} />
      <ActivityAgeRange formik={formik} />
      <DescriptionField formik={formik} />
      <SocialMediaLinks formik={formik} />
      <CooperateCheck formik={formik} />
      <ActivityLicense formik={formik} />
      <NgoDocuments formik={formik} />
      <UploadSection />
      <NgoPublishDocument formik={formik} />
      <LoginData formik={formik} />
      <ConditionAndConfirm formik={formik} />
      <FormButtons />
    </form>
  );
}

export default RegistrationForm;
