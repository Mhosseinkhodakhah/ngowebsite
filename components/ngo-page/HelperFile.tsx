import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

function HelperFile({ link }: { link: string }) {
  const t = useTranslations("ngo-registration");

  return (
    <div className="w-full flex justify-between items-center rounded-md border-1 border-green-100 max-w-screen-lg p-4 bg-green-100">
      <p className="flex-1">
        {t("Click the button to download the registration guide file")}
      </p>
      <Link download href={link} target="_blank">
        <Button className="text-white" color="primary">
          {t("Download")}
        </Button>
      </Link>
    </div>
  );
}

export default HelperFile;
