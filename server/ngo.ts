import axios from "axios";

import instance from "@/utils/instance";

export const uploadDocs = async (file: FormData) => {
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "page/uploadFile",
      file,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );

    return data;
  } catch (err) {
    console.log(err);

    return false;
  }
};

export const NogsRegisteration = async (values: any) => {
  try {
    const { data } = await instance.post("ngo/create", values);

    return data;
  } catch (error) {
    console.error(error);

    return false;
  }
};
