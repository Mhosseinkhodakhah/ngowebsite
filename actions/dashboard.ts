import { revalidatePath } from "next/cache";

import instance from "@/utils/instance";

export const getProjects = async () => {
  try {
    const { data } = await instance.get("ngo/pannel/projects");

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createProject = async (values: any) => {
  try {
    const { data } = await instance.post("ngo/project/create", values);

    revalidatePath("/dashboard/projects");

    return data;
  } catch (err: any) {
    console.log("eeerrrr", err);
  }
};

export const createDocument = async (values: any) => {
  try {
    const { data } = await instance.post("ngo/document/create", values);

    revalidatePath("/dashboard/documents");

    return data;
  } catch (err) {
    console.log("eeerrrr", err);

    return false;
  }
};

export const getDocuments = async () => {
  try {
    const { data } = await instance.get("ngo/pannel/documents");

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
