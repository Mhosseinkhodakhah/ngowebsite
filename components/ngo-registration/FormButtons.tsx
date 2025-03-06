import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

function FormButtons() {
  const t = useTranslations("ngo-registration");

  return (
    <div className="flex gap-4">
      <Button className="text-gray" color="primary">
        {t("Submit")}
      </Button>
      <Button className="text-gray" color="secondary">
        {t("Cancel")}
      </Button>
    </div>
  );
}

export default FormButtons;
