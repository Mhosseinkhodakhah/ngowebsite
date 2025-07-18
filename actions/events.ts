import instance from "@/utils/instance";

export const getEvents = async (
  type?: string,
  sort?: string,
  start?: string,
  end?: string,
  search?: string,
  page?: string
) => {
  try {
    const { data } = await instance.get(
      `events-educations/event/all?type=${type}&sort=${sort}&start=${start}&end=${end}&search=${search}&page=${page}`
    );

    return data;
  } catch (err) {
    return err;
  }
};

export const getSingleEvent = async (id: string) => {
  try {
    const { data } = await instance.get(`events-educations/event/${id}`);

    return data;
  } catch (err) {
    return err;
  }
};
