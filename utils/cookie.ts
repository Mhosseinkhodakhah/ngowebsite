"use server";

import { cookies } from "next/headers";

export const setCookie = async (options: {
  name: string;
  value: string;
  maxAge?: number;
}) => {
  try {
    const cookieStore = await cookies();

    cookieStore.set(options.name, options.value, {
      maxAge: options.maxAge || 7 * 24 * 60 * 60, // 7 days by default
      path: "/",
      httpOnly: true,
      //   secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const getCookie = async (name: string) => {
  try {
    const cookieStore = await cookies();

    return cookieStore.get(name);
  } catch (error) {
    console.log(error);

    return error;
  }
};
