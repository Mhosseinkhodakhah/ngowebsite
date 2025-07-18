import instance from "@/utils/instance";

export const getEducations = async (
  type?: string,
  sort?: string,
  start?: string,
  end?: string,
  search?: string,
  page?: string
) => {
  try {
    const { data } = await instance.get(
      `events-educations/education/all/?type=${type}&sort=${sort}&start=${start}&end=${end}&search=${search}&page=${page}`
    );

    return data;
  } catch (err) {
    return err;
  }
};

export const getSingleEducation = async (id: string) => {
  try {
    const { data } = await instance.get(`events-educations/education/${id}`);

    return data;
  } catch (err) {
    return err;
  }
};

export const getDescriptionPage = async (page: string) => {
  try {
    const { data } = await instance.get(`/page/description/${page}`);

    return data;
  } catch (err) {
    return err;
  }
};
