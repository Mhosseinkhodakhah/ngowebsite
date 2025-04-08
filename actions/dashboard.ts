"use server";

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

    return false;
  }
};

export const updateProject = async (values: any, id: string) => {
  try {
    const { data } = await instance.post(`/ngo/project/update/${id}`, values);

    revalidatePath("/dashboard/projects");

    return data;
  } catch (err: any) {
    console.log("eeerrrr", err);

    return false;
  }
};

export const completeProject = async (values: any) => {
  try {
    const { data } = await instance.post(`/ngo/project/complete`, values);

    revalidatePath("/dashboard/projects");

    return data;
  } catch (err: any) {
    console.log("eeerrrr", err);

    return false;
  }
};

export const ongoingProject = async (id: any) => {
  try {
    const { data } = await instance.post(`/ngo/project/delete/${id}`);

    revalidatePath("/dashboard/projects");

    return data;
  } catch (err: any) {
    console.log("eeerrrr", err);

    return false;
  }
};
export const deleteProject = async (id: any) => {
  try {
    const { data } = await instance.post(`/ngo/project/delete/${id}`);

    revalidatePath("/dashboard/projects");

    return data;
  } catch (err: any) {
    console.log("eeerrrr", err);

    return false;
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

export const updateDocument = async (values: any, id: string) => {
  try {
    const { data } = await instance.post(`/ngo/document/update/${id}`, values);

    revalidatePath("/dashboard/documents");

    return data;
  } catch (err) {
    console.log("eeerrrr", err);

    return false;
  }
};

export const deleteDocument = async (id: string) => {
  try {
    const { data } = await instance.post(`/ngo/document/delete/${id}`);

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
export const getSingleDocument = async (id: string) => {
  try {
    const { data } = await instance.get(`page/documents/${id}`);

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
