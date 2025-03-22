import * as Yup from "yup";

export const ngoRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  establishmentYear: Yup.number().required("Establishment Year is required"),
  activityField: Yup.array()
    .min(1, "You must select at least one field of activity")
    .required("Activity Field is required"),
  otherActivityField: Yup.string().when("activityField", {
    is: (value: string[]) => value?.includes("other"),
    then: () => Yup.string().required("Please specify"),
    otherwise: () => Yup.string(),
  }),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  address: Yup.string().required("Address is required"),
  postal: Yup.string().required("Postal or zip code is required"),
  phone: Yup.string()
    .required("Phone is required")
    .min(8, "Phone number must contain at least 8 digits")
    .max(15, "Phone number must not exceed 15 digits"),
  code: Yup.string().required("Code is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  areaAndScope: Yup.array()
    .min(1, "You must select at least one area and scope of activity")
    .required("Area and scope of activity is required"),
  otherAreaAndScope: Yup.string().when("areaAndScope", {
    is: (value: string[]) => value?.includes("other"),
    then: () => Yup.string().required("Please specify"),
    otherwise: () => Yup.string(),
  }),
  specificCultureGroupValue: Yup.array().min(1, "Please select an option"),
  specificCultureGroupDescription: Yup.string().required("Please specify"),
  specificActiveAreas: Yup.array().min(1, "Please select an option"),
  areaOfExpertise: Yup.array().min(1, "Please select an option"),
  areaOfExpertiseValue: Yup.string().when("areaOfExpertise", {
    is: (value: string[]) => value?.includes("other"),
    then: () => Yup.string().required("Please specify"),
    otherwise: () => Yup.string(),
  }),
  populationConcentration: Yup.array().min(1, "Please select an option"),
  populationConcentrationValue: Yup.string().when("populationConcentration", {
    is: (value: string[]) => value?.includes("other"),
    then: () => Yup.string().required("Please specify"),
    otherwise: () => Yup.string(),
  }),
  group: Yup.array().min(1, "Please select an option"),
  additionalInformation: Yup.string().required(
    "Additional information is required"
  ),
  cooperationSelect: Yup.array().min(1, "Please select an option"),
  licenseValue: Yup.array().min(1, "Please select an option"),
  licenseDescription: Yup.string().when("licenseValue", {
    is: (value: string[]) => value?.includes("yes"),
    then: () => Yup.string().required("Please specify"),
    otherwise: () => Yup.string(),
  }),
  documents: Yup.array().min(1, "Please select an option"),
  publishSelect: Yup.array().min(1, "Please select an option"),
  publishValue: Yup.string().when("areaOfExpertise", {
    is: (value: string[]) => value?.includes("limited"),
    then: () => Yup.string().required("Please specify"),
    otherwise: () => Yup.string(),
  }),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "The password must not be shorter than 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match")
    .min(8, "The Confirm password must not be shorter than 8 characters"),
  conditonAndConfirm: Yup.array()
    .min(2, "Please select all options")
    .max(2, "Please select all options")
    .length(2, "Please select all options")
    .required("Please select all options"),
});

export const documentSchema = Yup.object().shape({
  name: Yup.string().required("Ngo name is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  type: Yup.array().min(1, "Please select an option"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

export const ProjectSchema = Yup.object().shape({});

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "The password must not be shorter than 8 characters"),
});
