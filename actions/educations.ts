import instance from "@/utils/instance";

export const getEducations = async (type?: string, sort?: string) => {
  try {
    const { data } = await instance.get(
      `events-educations/education/all/?type=${type}&sort=${sort}`
    );

    return data;
  } catch (err) {
    console.error(err);
  }
};
