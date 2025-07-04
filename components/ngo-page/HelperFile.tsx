import { useTranslations } from "next-intl";
import Link from "next/link";

function HelperFile({ link }: { link: string }) {
  const t = useTranslations("ngo-registration");

  return (
    <div
      className="w-full flex justify-between items-start rounded-md max-w-screen-md p-4 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <p className="flex-1">
        {/* {t("Click here to")} */}
        <Link
          download
          className="text-primary px-2"
          href={link}
          target="_blank"
        >
          {t("download")}
        </Link>
        {t("the registration guide file")}
      </p>
    </div>
  );
}

export default HelperFile;
