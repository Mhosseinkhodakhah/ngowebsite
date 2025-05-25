"use client";

import { Divider } from "@heroui/divider";
// import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
// import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

// import { getFooter } from "@/actions/home";
import Facebook from "../common/icons/facebook";
import Twitter from "../common/icons/twitter";
import Linkedin from "../common/icons/linkedin";
import CopyrightIcon from "../common/icons/copyrightIcon";
import Instagram from "../common/icons/instagram";

import LeftSection from "./LeftSection";
import CenterSection from "./CenterSection";
import RightSection from "./RightSection";

import { getFooter } from "@/actions/home";

function Footer() {
  const t = useTranslations("footer");

  const { data } = useQuery({
    queryKey: ["getFooter"],
    queryFn: getFooter,
  });

  const pathname = usePathname();

  return (
    <footer
      className={`${pathname.includes("login") ? "hidden" : "block"} w-full bg-gradient-to-tr from-primary to-slate-800 p-4 mt-10`}
    >
      <section className="w-full grid lg:grid-rows-1 lg:grid-cols-3 justify-center items-center">
        <LeftSection data={data?.data} />
        <Divider className="bg-white my-2 block lg:hidden" />
        <CenterSection />
        <Divider className="bg-white my-2 block lg:hidden" />
        <RightSection />
      </section>
      <Divider className="bg-gray my-2" />
      <section className="text-gray flex flex-col justify-center items-center md:flex-row md:justify-between">
        <p className="text-xs">
          {t("Copyright")}
          <CopyrightIcon />
          {new Date().getFullYear()}.{t("All rights of this site are reserved")}
        </p>
        <ul className="flex gap-1 items-center my-2">
          <li>
            <Link href={data ? data?.data?.faceBookLink : ""}>
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href={data ? data?.data?.xLink : ""}>
              <Twitter />
            </Link>
          </li>
          <li>
            <Link href={data ? data?.data?.linkedInLink : ""}>
              <Linkedin />
            </Link>
          </li>
          <li>
            <Link href={data ? data?.data?.instaLink : ""}>
              <Instagram />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
