import axios, { AxiosInstance } from "axios";
import { cookies } from "next/headers";

const createAxiosInstance = async (): Promise<AxiosInstance> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("miras-token")?.value;

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    timeout: 10000, // 10 seconds timeout
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config) => {
      // You can modify config here before sending the request
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response) => {
      // Any status code within the range of 2xx triggers this function
      return response;
    },
    (error) => {
      // Handle specific error cases
      if (error.response) {
        // Server responded with a status code outside of 2xx
        switch (error.response.status) {
          case 401:
            // Handle unauthorized error (e.g., redirect to login)
            console.error("Unauthorized access 401");
            break;
          case 404:
            console.error("Resource not found 404");
            break;
          case 500:
            console.error("Server error 500");
            break;
          default:
            console.error("An error occurred:", error.response.status);
        }
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
      } else {
        // Error in setting up the request
        console.error("Error setting up request:", error.message);
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export default createAxiosInstance;
