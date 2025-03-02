"use client";

import { NavbarItem } from "@heroui/navbar";
import clsx from "clsx";
import { useTranslations } from "use-intl";
import { link as linkStyles } from "@heroui/theme";
import { useParams, useRouter } from "next/navigation";

import ArrowDown from "../common/icons/arrow-down";

import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";

const Links = () => {
  const t = useTranslations("navbar");
  const router = useRouter();
  const { locale } = useParams() as { locale: string };

  const handleRoute = (mainRoute: string, route: string) => {
    router.push(`/${locale}/${mainRoute}/${route}`);
  };

  return (
    <ul className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          <Link
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-primary active:text-primary group relative gap-1",
            )}
            color="foreground"
            href={`${item.href}`}
          >
            {t(item.label)}
            {item.children && (
              <ArrowDown className="group-hover:rotate-180 transition-all ease-out duration-300" />
            )}
            <ul
              className={`hidden ${item.children && "group-hover:flex"} absolute top-6 px-5 py-4 w-max rounded-md flex-col shadow-md border border-gray bg-gray dark:bg-secondary`}
            >
              {item.children?.map((ch) => (
                <button
                  key={ch.label}
                  className="py-2 text-dark dark:text-gray hover:text-primary w-full dark:hover:text-primary text-start"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute(item.href, ch.href);
                  }}
                  onKeyPress={(e) => {
                    e.preventDefault();
                    if (e.key === "Enter") handleRoute(item.href, ch.href);
                  }}
                >
                  {t(ch.label)}
                </button>
              ))}
            </ul>
          </Link>
        </NavbarItem>
      ))}
    </ul>
  );
};

export default Links;
