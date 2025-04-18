import instance from "@/utils/instance";

export const getHomeData = async () => {
  try {
    const { data } = await instance.get("/page/home");

    return data;
  } catch (err) {
    console.log(err);

    return false;
  }
};

export const getFooter = async () => {
  try {
    const { data } = await instance.get("/page/footer");

    return data;
  } catch (err) {
    console.error("Error fetching events:", err);

    return false;
  }
};
