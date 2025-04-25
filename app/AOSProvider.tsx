// components/AOSProvider.jsx
"use client";
import { ReactNode, useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const AOSProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
