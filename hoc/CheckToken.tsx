"use client";

import { useEffect } from "react";

import { getCookie } from "@/utils/cookie";
import useStore from "@/store";

function CheckToken({ children }: { children: React.ReactNode }) {
  const logout = useStore((state) => state.logoutNgo);

  const getToken = async () => {
    const token = await getCookie("miras-token");

    if (!token) {
      logout();
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <>{children}</>;
}

export default CheckToken;
