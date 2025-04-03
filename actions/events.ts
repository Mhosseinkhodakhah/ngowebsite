import instance from "@/utils/instance";

export const getEvents = async (
  type?: string,
  sort?: string,
  start?: string,
  end?: string,
  page?: string
) => {
  try {
    const { data } = await instance.get(
      `events-educations/event/all?type=${type}&sort=${sort}&start=${start}&end=${end}&page=${page}`
    );

    return data;
  } catch (err) {
    console.error("Error fetching events:", err);
    return false;
  }
};
