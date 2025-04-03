import instance from "@/utils/instance";

export const getEducations = async (
  type?: string,
  sort?: string,
  start?: string,
  end?: string,
  page?: string
) => {
  try {
    const { data } = await instance.get(
      `events-educations/education/all/?type=${type}&sort=${sort}&start=${start}&end=${end}&page=${page}`
    );

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getSingleEducation = async (id: string) => {
  try {
    const { data } = await instance.get(`events-educations/education/${id}`);

    return data;
  } catch (err) {
    console.error("Error fetching events:", err);
    return false;
  }
};
