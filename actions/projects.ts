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

export const getCompletedProjects = async () => {
  try {
    const { data } = await instance.get("/page/project/complete");

    return data;
  } catch (err) {
    console.log(err);

    return err;
  }
};

export const getOngoingProjects = async () => {
  try {
    const { data } = await instance.get("/page/project/ongoing");

    return data;
  } catch (err) {
    console.log(err);

    return false;
  }
};

export const getGoodPracticeProjects = async () => {
  try {
    const { data } = await instance.get("/page/project/GoodPractice");

    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getCollaborationProjects = async () => {
  try {
    const { data } = await instance.get("/page/project/Collaboration");

    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
