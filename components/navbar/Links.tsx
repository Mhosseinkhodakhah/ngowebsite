"use client";

import { useMemo } from "react";
import { NavbarItem } from "@heroui/navbar";
import clsx from "clsx";
import { useTranslations } from "use-intl";
import { link as linkStyles } from "@heroui/theme";
import { useParams, usePathname, useRouter } from "next/navigation";

import ArrowDown from "../common/icons/arrow-down";

import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { useQuery } from "@tanstack/react-query";
import { getDynamicPaths } from "@/actions/dynamic";
import { useEffect, useState } from "react";

const Links = () => {
  const [dynamicLink, setDynamicLink] = useState<any[]>([]);
  const t = useTranslations("navbar");
  const router = useRouter();
  const { locale } = useParams() as { locale: string };
  const pathname = usePathname();

  const { data } = useQuery({
    queryKey: ["getDynamicPaths"],
    queryFn: getDynamicPaths,
  });

  useEffect(() => {
    if (data?.success) {
      const getRoutes = data?.data?.map((item: any) => {
        if (item?.children) {
          return {
            href: item?.href,
            children: item?.children.map((child: any) => ({
              href: child?.href,
              label:
                locale === "pe"
                  ? child?.label[0]
                  : locale === "en"
                    ? child?.label[1]
                    : child?.label[2],
            })),
            label:
              locale === "pe"
                ? item?.label[0]
                : locale === "en"
                  ? item?.label[1]
                  : item?.label[2],
          };
        } else {
          return {
            href: item?.href,
            label:
              locale === "pe"
                ? item?.label[0]
                : locale === "en"
                  ? item?.label[1]
                  : item?.label[2],
          };
        }
      });
      // setDynamicLink(getRoutes);
    }
  }, [data]);

  const handleRoute = (mainRoute: string, route: string) => {
    router.push(`/${locale}/${mainRoute}/${route}`);
  };

  const path = useMemo(() => {
    const getRoute = pathname.split("?");

    return getRoute[0];
  }, [pathname]);

  return (
    <ul className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems?.concat(dynamicLink).map((item) => (
        <NavbarItem key={item.href}>
          <Link
            className={clsx(
              linkStyles({ color: "foreground" }),
              `data-[active=true]:text-primary data-[active=true]:font-medium hover:text-primary active:text-primary group relative gap-1 ${pathname === `/${locale}` && pathname.includes(item.href) ? "border-b-5 border-b-primary" : pathname.includes(item.href) && item.href.length > 1 ? "border-b-5 border-b-primary" : ""} text-sm rounded-md`
            )}
            color="foreground"
            href={`${item.href}`}
          >
            {item?.static ? t(item?.label) : item?.label}
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
                  {item?.static ? t(ch?.label) : ch?.label}
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
