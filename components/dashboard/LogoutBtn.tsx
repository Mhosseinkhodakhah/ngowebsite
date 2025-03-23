"use client";

import { useTranslations } from "next-intl";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

import useStore from "@/store";
import { deleteCookie } from "@/utils/cookie";
import { useRouter } from "@/i18n/navigation";

function LogoutBtn() {
  const { theme } = useTheme();
  const t = useTranslations("dashboard");
  const logOutNGO = useStore((state) => state.logoutNgo);
  const router = useRouter();

  const handleLogout = () => {
    logOutNGO();
    deleteCookie("miras-token");
    router.replace("/");
  };

  return (
    <Button
      className="text-gray m-4"
      color={theme === "dark" ? "primary" : "secondary"}
      onPress={handleLogout}
    >
      <Icon height="24" icon="solar:login-outline" width="24" />
      {t("Logout")}
    </Button>
  );
}

export default LogoutBtn;
