import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";

function NgoDocuments() {
  const t = useTranslations("ngo-registration");

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={[]}
      label={t("Upload documents (one of the mandatory items)")}
      // orientation="horizontal"
    >
      <Checkbox className="my-1" value="statutes">
        {t("Statutes")}
      </Checkbox>
      <Checkbox className="my-1" value="activity-license">
        {t("Activity license")}
      </Checkbox>
      <Checkbox
        className="my-1"
        value="introduction-letter-of-related-institutions"
      >
        {t("Introduction letter of related institutions")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default NgoDocuments;
