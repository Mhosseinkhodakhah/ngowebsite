"use client";

import {
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import NextLink from "next/link";

import LoginBtn from "../navbar/LoginBtn";
import Links from "../navbar/Links";
import MenuLinks from "../navbar/MenuLinks";
import NavbarContainer from "../navbar/NavbarContainer";

import LanguageSwitch from "./language-switch";
import { Logo } from "./icons";
import { ThemeSwitch } from "./theme-switch";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
        <Links />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          <LoginBtn />
          <LanguageSwitch />
        </NavbarItem>
      </NavbarContent>
    </NavbarContainer>
  );
};
