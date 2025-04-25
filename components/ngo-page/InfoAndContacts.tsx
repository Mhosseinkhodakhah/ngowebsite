import { useTranslations } from "next-intl";
import { Snippet } from "@heroui/snippet";
import { Button } from "@heroui/button";

import EmailIcon from "../common/icons/email";
import GroupIcon from "../common/icons/goup-icon";
import WebIcon from "../common/icons/web-icon";
import Instagram from "../common/icons/instagram";
import Linkedin from "../common/icons/linkedin";
import Telegram from "../common/icons/Telegram";

import { Link } from "@/i18n/navigation";

function InfoAndContacts({ data }: { data: any }) {
  const t = useTranslations("NGOPage");

  return (
    <section className="my-20 flex flex-col justify-center items-center mx-4 w-[90%] lg:mx-0 lg:w-2/3 text-gray bg-gradient-to-br from-secondary to-primary rounded-md gap-8">
      <div className="w-full text-center py-4">
        <h2 className="font-bold text-xl">{t("INFO & CONTACTS")}</h2>
      </div>
      <div className="py-4 flex flex-col md:flex-row gap-10 md:gap-0 justify-around w-full">
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <WebIcon />
            <span>{t("Website")}</span>
          </div>
          {data?.website ? (
            <Link className="mt-4" href={data?.website} target="_blank">
              <Button className="text-white" variant="flat">
                {t("Visit Website")}
              </Button>
            </Link>
          ) : (
            "-"
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2 mb-4">
            <EmailIcon />
            <span>{t("Mail")}</span>
          </div>
          <span className="text-sm font-light">{data?.email}</span>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex gap-2 mb-4">
            <GroupIcon />
            <span>{t("Social")}</span>
          </div>
          {data?.socialMedia.instagram && (
            <div className="my-2 text-white flex gap-2 items-center">
              <Instagram />
              <span className="text-sm font-light">
                {data?.socialMedia.linkedIn}
              </span>
            </div>
          )}
          {data?.socialMedia.linkedIn && (
            <div className="my-2 text-white flex gap-2 items-center">
              <Linkedin />
              <span className="text-sm font-light">
                {data?.socialMedia.linkedIn}
              </span>
            </div>
          )}
          {data?.socialMedia.telegram && (
            <div className="my-2 text-white flex gap-2 items-center">
              <Telegram />
              <span className="text-sm font-light">
                {data?.socialMedia.telegram}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <h4 className="text-center text-lg">{t("Address")}</h4>
        <p className="text-center font-light px-4 md:px-0">{data?.address}</p>
      </div>
    </section>
  );
}

export default InfoAndContacts;
