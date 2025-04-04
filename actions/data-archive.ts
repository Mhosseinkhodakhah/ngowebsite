import instance from "@/utils/instance";

export const dataArchive = async (page: string, search?: string) => {
  try {
    const data = await instance.get(
      `page/documents/all?${search && `search=${search}`}&page=${page}`
    );

    return data;
  } catch (err) {
    console.log(err);

    return false;
  }
};
export const getSingleDataArchive = async (id: string) => {
  try {
    const data = await instance.get(`page/documents/${id}`);

    return data;
  } catch (err) {
    console.log(err);

    return false;
  }
};
