import instance from "@/utils/instance";

export const getAboutUs = async () => {
  try {
    const { data } = await instance.get("/page/aboutus");

    return data;
  } catch (err) {
    console.error("Error fetching events:", err);

    return false;
  }
};
