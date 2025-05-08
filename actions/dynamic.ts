import instance from "@/utils/instance";

export const getDynamicPaths = async () => {
  try {
    const { data } = await instance.get("/page/path/all");

    return data;
  } catch (err) {
    console.error("Error fetching events:", err);

    return false;
  }
};
