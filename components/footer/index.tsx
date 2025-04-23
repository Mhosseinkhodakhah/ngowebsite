"use client";

import { Divider } from "@heroui/divider";
// import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
// import { usePathname } from "next/navigation";

// import { getFooter } from "@/actions/home";
import Facebook from "../common/icons/facebook";
import Twitter from "../common/icons/twitter";
import Linkedin from "../common/icons/linkedin";
import CopyrightIcon from "../common/icons/copyrightIcon";
import Instagram from "../common/icons/instagram";

import LeftSection from "./LeftSection";
import CenterSection from "./CenterSection";
import RightSection from "./RightSection";

import useStore from "@/store";

function Footer({ footer }: { footer: any }) {
  const t = useTranslations("footer");

  const pathname = usePathname();

  return (
    <footer
      className={`${pathname.includes("login") ? "hidden" : "block"} w-full bg-primary p-4`}
    >
      <section className="w-full grid md:grid-rows-1 md:grid-cols-3 justify-center items-center">
        <LeftSection data={footer} />
        <CenterSection />
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
            <Link href={footer ? footer?.faceBookLink : ""}>
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href={footer ? footer?.xLink : ""}>
              <Twitter />
            </Link>
          </li>
          <li>
            <Link href={footer ? footer.linkedInLink : ""}>
              <Linkedin />
            </Link>
          </li>
          <li>
            <Link href={footer ? footer?.instaLink : ""}>
              <Instagram />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
