"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { redirect } from "@/i18n/navigation";
import useStore from "@/store";

function Page() {
  const isLogin = useStore((state) => state.isLogin);
  const { locale } = useParams() as { locale: string };

  useEffect(() => {
    if (isLogin) {
      return redirect({ href: "/dashboard/projects", locale: locale });
    } else {
      redirect({ href: "/", locale: locale });
    }
  }, [isLogin]);

  return <></>;
}

export default Page;
