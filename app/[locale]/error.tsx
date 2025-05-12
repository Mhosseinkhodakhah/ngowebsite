"use client";

import Image from "next/image";
import { Button } from "@heroui/button";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

import { deleteCookie } from "@/utils/cookie";
import { useRouter } from "@/i18n/navigation";
import useStore from "@/store";
import ErrorImage from "@/public/images/error.webp";

export default function Error({
  error,
  reset,
}: {
  error: any;
  reset: () => void;
}) {
  const t = useTranslations("error");
  const logoutNGO = useStore((state) => state.logoutNgo);
  const router = useRouter();

  console.log("fffff", error);

  // useEffect(() => {
  if (error.message === "Error: 401") {
    deleteCookie("miras-token");
    logoutNGO();
    router.replace("/login");
  }
  // }, [error]);

  return (
    <div className="w-full flex justify-center items-center flex-col mt-20 border-1 border-secondary max-w-md mx-auto rounded-md py-10 gap-4 bg-danger-100 shadow-md dark:bg-danger-300">
      <Image
        alt="Error"
        className="w-40"
        height={160}
        src={ErrorImage}
        width={160}
      />

      <h2>{t("Something went wrong!")}</h2>

      <Button
        className="text-white"
        color="primary"
        endContent={
          <Icon
            height="24"
            icon="material-symbols:refresh-rounded"
            width="24"
          />
        }
        onPress={() => reset()}
      >
        {t("Try again")}
      </Button>
    </div>
  );
}
