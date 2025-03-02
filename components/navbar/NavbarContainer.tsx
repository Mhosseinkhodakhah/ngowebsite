"use client";

import { ReactNode, useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { useParams } from "next/navigation";
import { Link } from "@heroui/link";
import { useTranslations } from "next-intl";

import { ThemeSwitch } from "../common/theme-switch";
import LanguageSwitch from "../common/language-switch";
import HambergerMenu from "../common/icons/hamberger-menu";

import { siteConfig } from "@/config/site";

const NavbarContainer = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const t = useTranslations("navbar");

  const { locale } = useParams() as { locale: string };

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <HeroUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      {children}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <LanguageSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={<HambergerMenu className="text-xl dark:text-gray" />}
        />
        <NavbarMenu>
          {/* <MenuLinks closeMenu={handleCloseMenu} /> */}
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="flex flex-col text-start justify-start items-start"
            >
              <Link
                className="text-dark dark:text-gray hover:text-primary dark:hover:text-primary w-full"
                href={`/${locale}/${item.href}`}
                onPress={handleCloseMenu}
              >
                {t(item.label)}
              </Link>
              {item.children?.map((ch) => (
                <Link
                  key={ch.label}
                  className="text-dark dark:text-gray hover:text-primary my-2"
                  href={`/${locale}/${item.href}/${ch.href}`}
                  onPress={handleCloseMenu}
                >
                  {t(ch.label)}
                </Link>
              ))}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </HeroUINavbar>
  );
};

export default NavbarContainer;
