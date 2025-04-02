import instance from "@/utils/instance";

export const getEducations = async () => {
  try {
    const { data } = await instance.get("events-educations/education/all");

    return data;
  } catch (err) {
    console.error(err);
  }
};
