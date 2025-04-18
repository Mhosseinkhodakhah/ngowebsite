"use client";

import { NavbarContent, NavbarBrand, NavbarItem } from "@heroui/navbar";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@heroui/button";

import LoginBtn from "../navbar/LoginBtn";
import Links from "../navbar/Links";
import NavbarContainer from "../navbar/NavbarContainer";

import LanguageSwitch from "./language-switch";
import { ThemeSwitch } from "./theme-switch";

import Logo from "@/public/images/logo.jpg";
import { Link } from "@/i18n/navigation";

export const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <NavbarContainer>
      <NavbarContent className=" basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 ">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image priority alt="Logo" height={100} src={Logo} width={100} />
          </NextLink>
        </NavbarBrand>
        <Links />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-2">
          <ThemeSwitch />
          <LoginBtn />
          <Button
            as={Link}
            className="text-gray"
            color="primary"
            href="/ngo/ngos-registration"
            size="sm"
            variant="shadow"
          >
            {t("Join Us")}
          </Button>
          <LanguageSwitch />
        </NavbarItem>
      </NavbarContent>
    </NavbarContainer>
  );
};
