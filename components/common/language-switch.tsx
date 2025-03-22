"use client";

import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";

import ArrowDown from "./icons/arrow-down";

import EnFlag from "@/public/images/english-flag.png";
import IrFlag from "@/public/images/iran-flag.png";
import RuFlag from "@/public/images/russian-flag.png";

function LanguageSwitch() {
  const t = useTranslations("navbar");
  const params = usePathname();
  const { locale } = useParams() as { locale: string };
  const router = useRouter();

  const handleChangeLanguage = (newLocale: string) => {
    if (locale && typeof newLocale === "string") {
      const newRoute = params.replace(locale, newLocale);

      localStorage.setItem("locale", JSON.stringify(newLocale));

      router.push(`${newRoute}`);
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="border-primary" size="sm" variant="bordered">
          {locale === "en" ? (
            <>
              <p className="font-bold">{t("En")}</p>
              <ArrowDown />
            </>
          ) : locale === "pe" ? (
            <>
              <p className="font-bold">{t("Fa")}</p>
              <ArrowDown />
            </>
          ) : locale === "ru" ? (
            <>
              <p className="font-bold">{t("Ru")}</p>
              <ArrowDown />
            </>
          ) : null}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="en"
          startContent={
            <Image alt="English flag" height={30} src={EnFlag} width={30} />
          }
          onPress={() => handleChangeLanguage("en")}
        >
          <p className="font-bold">{t("En")}</p>
        </DropdownItem>
        <DropdownItem
          key="fa"
          startContent={
            <Image alt="Iran flag" height={30} src={IrFlag} width={30} />
          }
          onPress={() => handleChangeLanguage("pe")}
        >
          <p className="font-bold">{t("Fa")}</p>
        </DropdownItem>
        <DropdownItem
          key="ru"
          startContent={
            <Image alt="Russian flag" height={30} src={RuFlag} width={30} />
          }
          onPress={() => handleChangeLanguage("ru")}
        >
          <p className="font-bold">{t("Ru")}</p>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default LanguageSwitch;
