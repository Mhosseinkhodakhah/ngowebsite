"use client";

import { Divider } from "@heroui/divider";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Facebook from "../common/icons/facebook";
import Twitter from "../common/icons/twitter";
import Linkedin from "../common/icons/linkedin";
import CopyrightIcon from "../common/icons/copyrightIcon";
import Instagram from "../common/icons/instagram";

import LeftSection from "./LeftSection";
import CenterSection from "./CenterSection";
import RightSection from "./RightSection";

function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-primary p-4">
      <section className="w-full grid md:grid-rows-1 md:grid-cols-3 justify-center items-center">
        <LeftSection />
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
            <Link href="http://www.facebook.com">
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href="http://www.x.com">
              <Twitter />
            </Link>
          </li>
          <li>
            <Link href="http://www.linkedin.com">
              <Linkedin />
            </Link>
          </li>
          <li>
            <Link href="http://www.instagram.com">
              <Instagram />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
