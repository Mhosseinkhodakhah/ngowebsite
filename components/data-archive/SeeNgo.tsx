import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

function SeeNgo({ id }: { id: string }) {
  const t = useTranslations("data-archive");

  return (
    <Link href={`/ngo/${id}`}>
      <Button className="text-white" color="primary" variant="shadow">
        {t("See Ngo")}
      </Button>
    </Link>
  );
}

export default SeeNgo;
