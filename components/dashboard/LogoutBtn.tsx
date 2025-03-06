"use client";

import { useTranslations } from "next-intl";

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

function LogoutBtn() {
  const { theme } = useTheme();
  const t = useTranslations("dashboard");

  return (
    <Button
      className="text-gray m-4"
      color={theme === "dark" ? "primary" : "secondary"}
    >
      <Icon height="24" icon="solar:login-outline" width="24" />
      {t("Logout")}
    </Button>
  );
}

export default LogoutBtn;
