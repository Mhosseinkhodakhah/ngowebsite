import instance from "@/utils/instance";

export const getEvents = async () => {
  try {
    const { data } = await instance.get("events-educations/event/all");

    return data;
  } catch (err) {
    console.error("Error fetching events:", err);
    return false;
  }
};
