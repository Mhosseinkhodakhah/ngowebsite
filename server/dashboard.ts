import instance from "@/utils/instance";

export const getProjects = async () => {
  try {
    const { data } = await instance.get("ngo/pannel/projects");

    return data;
  } catch (err) {
    console.log("eeerrrr", err);

    return false;
  }
};

export const createProject = async (values: any) => {
  try {
    const { data } = await instance.post("ngo/project/create", values);

    return data;
  } catch (err) {
    console.log("eeerrrr", err);

    return false;
  }
};

export const createDocument = async (values: any) => {
  try {
    const { data } = await instance.post("ngo/document/create", values);

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
  } catch (err) {
    console.log("eeerrrr ", `${err}`);

    return false;
  }
};
