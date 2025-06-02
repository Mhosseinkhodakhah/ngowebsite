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
import { Divider } from "@heroui/divider";

function otherNgoDetail({ data }: { data: any }) {
  const t = useTranslations("NGOPage");
  console.log('dddd' , data)
  return (
    <section className="my-10 flex flex-col justify-center items-center mx-4 w-[90%] lg:mx-0 lg:w-2/3 text-gray bg-gradient-to-br from-primary to-secondary rounded-md gap-4">
      <div className="w-full text-center py-4">
        <h2 className="font-bold text-xl">{t("OTHER NGO DETAILS")}</h2>
      </div>
      <div className="py-4 flex flex-col md:flex-row gap-10 md:gap-0 justify-around w-full">
        {/* <div className="flex flex-col items-center">
          <div className="flex gap-1 text-xs">
            <WebIcon />
            <span>{t("Activity Field")}</span>
          </div>
           <span className="text-xs font-light mt-4">{ data?.activityField }</span>
        </div> */}
        <div className="flex flex-col items-center">
          <div className="flex gap-1 textsm">
            <EmailIcon />
            <span>{t("NATIONALID")}</span>
          </div>
          <span className="text-xs font-light mt-4">{data?.nationalId}</span>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex gap-1 text-sm">
            <EmailIcon />
            <span>{t("populationConcentration")}</span>
          </div>
          <span className="text-xs font-light mt-4">{data?.populationConcentration}</span>
        </div>
         <div className="flex flex-col items-center ">
          <div className="flex gap-1 text-sm">
            <EmailIcon />
            <span>{t("specificActiveAreas")}</span>
          </div>
          <span className="text-xs font-light mt-4">{data?.specificActiveAreas}</span>
        </div>
      </div>
      <Divider className="flex w-full" />
      <div className="flex flex-col gap-1 mb-6">
        <h4 className="text-center text-lg">{t("Activity Field")}</h4>
        <p className="text-center font-light px-4 md:px-0">{data?.activityField}</p>
      </div>
      <div className="flex flex-col gap-1 mb-6">
        <h4 className="text-center text-lg">{t("areaOfExpertise")}</h4>
        <p className="text-center font-light px-4 md:px-0">{data?.areaOfExpertise}</p>
      </div>
    </section>
  );
}

export default otherNgoDetail;
