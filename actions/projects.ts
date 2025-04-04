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

export const getCategoryProjects = async (status: string, page: string) => {
  try {
    const { data } = await instance.get(
      `page/projects/all?status=${status}&page=${page}`
    );

    console.log("ddd", data);

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getSingleProject = async (id: string) => {
  try {
    const { data } = await instance.get(`page/projects/${id}`);

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
