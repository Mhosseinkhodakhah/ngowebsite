import { useTranslations } from "next-intl";
import m from "jalali-moment";
import { Button } from "@heroui/button";

import DateIcon from "../common/icons/dateIcon";
import EmailIcon from "../common/icons/email";

import { Link } from "@/i18n/navigation";

function ProjectInfo({ data, locale }: { data: any; locale: string }) {
  const t = useTranslations("projects");

  const peEndDate = m(data.endDate).locale("fa").format("YYYY/MM/DD");
  const peStartDate = m(data.startDate).locale("fa").format("YYYY/MM/DD");

  return (
    <section className="my-20 flex flex-col justify-center items-center  w-[90%] lg:mx-0 lg:w-2/3 text-gray bg-gradient-to-br from-secondary to-primary rounded-md gap-8">
      <div className="w-full text-center py-4">
        <h2 className="font-bold text-xl">{t("Project Information")}</h2>
      </div>
      <div className="py-4 flex flex-col md:flex-row gap-10 md:gap-0 justify-around w-full">
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <DateIcon />
            <span>{t("Start Date")}</span>
          </div>
          <p className="font-light">
            {locale === "pe" ? peStartDate : data.startDate}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <EmailIcon />
            <span>{t("Project Manager Email")}</span>
          </div>
          <p className="font-light">{data?.projectManagerEmail}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <DateIcon />
            <span>{t("End Date")}</span>
          </div>
          <p className="font-light">
            {locale === "pe" ? peEndDate : data.endDate}
          </p>
        </div>
      </div>
      {data?.location?.country && data?.location?.city && (
        <div className="flex flex-col gap-2 mb-6">
          <h4 className="text-center text-lg">{t("Location")}</h4>
          <p className="text-center font-light px-4 md:px-0">
            {data?.location?.country} - {data?.location?.city}
          </p>
        </div>
      )}
      <div className="m-4">
        <Link href={`/ngo/${data?._id}`}>
          <Button className="text-white" color="primary">
            {t("Visit Ngo")}
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default ProjectInfo;
