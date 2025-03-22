import instance from "@/utils/instance";

export const loginRequest = async (values: {
  username: string;
  password: string;
}) => {
  try {
    const { data } = await instance.post("ngo/login", values);

    return data;
  } catch (err) {
    console.log(err);

    return false;
  }
};
