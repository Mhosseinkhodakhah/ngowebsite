import { Link } from "@heroui/link";
import { NavbarMenuItem } from "@heroui/navbar";
import { useTranslations } from "use-intl";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

import { siteConfig } from "@/config/site";

function MenuLinks({ closeMenu }: { closeMenu: () => void }) {
  const t = useTranslations("navbar");

  const router = useRouter();
  const { locale } = useParams() as { locale: string };

  const handleRoute = (mainRoute: string, route: string) => {
    router.push(`/${locale}/${mainRoute}/${route}`);
    closeMenu();
  };

  return (
    <>
      {siteConfig.navMenuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className="text-dark dark:text-gray hover:text-primary dark:hover:text-primary w-full"
            href={`/${locale}/${item.href}`}
            size="lg"
          >
            {item.children ? (
              <Accordion
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="w-full p-0 m-0"
              >
                <AccordionItem
                  aria-label="Accordion 1"
                  title={t(item.label)}
                  className="w-full text-xs my-2 p-0 m-0 hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <ul>
                    {item.children?.map((ch) => (
                      <li key={ch.href}>
                        <Link
                          className="text-sm text-dark dark:text-gray m-4 hover:text-primary"
                          onPress={() => handleRoute(item.href, ch.href)}
                        >
                          {t(ch.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              </Accordion>
            ) : (
              <button
                className="text-[15px] mx-1 my-4 bg-transparent border-none p-0 m-0 cursor-pointer"
                onClick={closeMenu}
              >
                {t(item.label)}
              </button>
            )}
          </Link>
        </NavbarMenuItem>
      ))}
    </>
  );
}

export default MenuLinks;
