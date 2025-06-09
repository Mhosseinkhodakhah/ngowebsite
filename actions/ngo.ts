import axios from "axios";

import instance from "@/utils/instance";

export const uploadDocs = async (file: FormData) => {
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "page/uploadFile",
      file,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log("what happened in fucking upload logo", data);
    return data;
  } catch (err: any) {
    console.log(err);

    return err?.response;
  }
};

export const NogsRegisteration = async (values: any) => {
  try {
    const { data } = await instance.post("ngo/create", values);
    console.log("data is in creating ngo >>>> ", data);
    return data;
  } catch (error) {
    console.error(error);

    return "";
  }
};

export const getSingleNgo = async (id: string) => {
  try {
    const { data } = await instance.get(`ngo/${id}`);

    return data;
  } catch (err) {
    console.error(err);

    return false;
  }
};

export const getNgoData = async () => {
  try {
    const { data } = await instance.get(`/ngo/all`);

    return data;
  } catch (err) {
    console.error(err);

    return false;
  }
};
