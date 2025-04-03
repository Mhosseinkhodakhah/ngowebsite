import instance from "@/utils/instance";

export const getProjects = async () => {
  try {
    const { data } = await instance.get("page/projects");

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
