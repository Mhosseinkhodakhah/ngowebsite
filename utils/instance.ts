import axios from "axios";

import { getCookie } from "./cookie";

const token = async () => {
  const token: any = await getCookie("miras-token");

  if (token) {
    return token.value;
  }
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor
instance.interceptors.request.use(
  async (config) => {
    const getToken = await token();

    config.headers.Authorization = `Bearer ${getToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
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
          const UnauthorizedError = new Error("401");

          return Promise.reject(UnauthorizedError);

        case 404:
          const notFoundError = new Error("404");

          return Promise.reject(notFoundError);
          break;
        case 500:
          const serverError = new Error("500");

          return Promise.reject(serverError);
          break;
        default:
          const defaultError = new Error(
            `An error occurred: ${error.response.status}`
          );

          (defaultError as any).status = error.response.status;

          return Promise.reject(defaultError);
      }
    } else if (error.request) {
      const networkError = new Error("No response received from server");

      (networkError as any).status = 0;

      return Promise.reject(networkError);
    } else {
      // Error in setting up the request
      const setupError = new Error(error.message);

      (setupError as any).status = -1;

      return Promise.reject(setupError);
    }
  }
);

export default instance;
