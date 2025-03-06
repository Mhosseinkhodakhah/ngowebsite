import { Textarea } from "@heroui/input";
import { useTranslations } from "next-intl";

function DescriptionField() {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Additional information")}</h5>
      <Textarea
        // className="max-w-xs"
        label={t(
          "Brief explanation about the goals and activities of the organization",
        )}
      />
    </>
  );
}

export default DescriptionField;
