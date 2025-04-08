"use client";

import { ReactNode, useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/button";

import { ThemeSwitch } from "../common/theme-switch";
import LanguageSwitch from "../common/language-switch";
import HambergerMenu from "../common/icons/hamberger-menu";

import LoginBtn from "./LoginBtn";

import { siteConfig } from "@/config/site";
import { Link, useRouter } from "@/i18n/navigation";

const NavbarContainer = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const t = useTranslations("navbar");

  const router = useRouter();

  const handleCloseMenu = () => setIsMenuOpen(false);
  const handleJoinUs = () => {
    router.push("/ngo/ngos-registration");
  };

  return (
    <HeroUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      {children}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <Button
          className="text-gray"
          color="primary"
          size="sm"
          variant="solid"
          onPress={handleJoinUs}
        >
          {t("Join Us")}
        </Button>
        <LoginBtn />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={<HambergerMenu className="text-xl dark:text-gray" />}
        />
        <NavbarMenu>
          <div className="flex justify-between items-center py-4">
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="flex flex-col text-start justify-start items-start"
            >
              <Link
                className="text-dark dark:text-gray hover:text-primary dark:hover:text-primary w-full"
                href={item.href}
                onClick={handleCloseMenu}
              >
                {t(item.label)}
              </Link>
              {item.children?.map((ch) => (
                <Link
                  key={ch.label}
                  className="text-dark dark:text-gray hover:text-primary my-2"
                  href={`${item.href}/${ch.href}`}
                  onClick={handleCloseMenu}
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
