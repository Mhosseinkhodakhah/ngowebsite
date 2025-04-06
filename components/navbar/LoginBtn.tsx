"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import LoginIcon from "../common/icons/login";

import useStore from "@/store";

const LoginBtn = () => {
  const t = useTranslations("navbar");
  const { locale } = useParams();
  const isLogin = useStore((state: any) => state.isLogin);

  console.log(isLogin)

  return (
    <>
      {isLogin ? (
        <Button
          as={Link}
          className="font-normal text-gray bg-primary"
          href={`/${locale}/dashboard`}
          size="sm"
          variant="shadow"
        >
          {t("Dashboard")}
        </Button>
      ) : (
        <Button
          as={Link}
          className="font-normal text-gray bg-primary"
          endContent={<LoginIcon className="text-lg" />}
          href={`/${locale}/login`}
          size="sm"
          variant="shadow"
        >
          {t("Login")}
        </Button>
      )}
    </>
  );
};

export default LoginBtn;
