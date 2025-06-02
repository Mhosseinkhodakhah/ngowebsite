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

import Logo from "@/public/images/logo.png";
import { Link } from "@/i18n/navigation";
import useStore from "@/store";

export const Navbar = () => {
  const t = useTranslations("navbar");
  const isLogin = useStore((state: any) => state.isLogin);

  return (
    <div className="hover:bg-background w-full flex items-center transition-all ease-linear duration-300 sticky top-0 z-50 shadow-md">
      <NavbarContainer>
        <NavbarContent className="" justify="start">
          <NavbarBrand as="li" className="gap-3">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Image
                priority
                alt="Logo"
                // className="lg:w-32 lg:h-14 w-full object-cover"
                height={100}
                src={Logo}
                width={100}
              />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent>
          <Links />
        </NavbarContent>

        <NavbarContent
          className=" sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden lg:flex gap-2">
            <ThemeSwitch />
            <LoginBtn />
            {!isLogin && (
              <Button
                as={Link}
                className="text-gray text-[10px]"
                color="primary"
                href="/ngo/ngos-registration"
                size="sm"
                variant="shadow"
              >
                {t("Join Us")}
              </Button>
            )}
            <LanguageSwitch />
          </NavbarItem>
        </NavbarContent>
      </NavbarContainer>
    </div>
  );
};
