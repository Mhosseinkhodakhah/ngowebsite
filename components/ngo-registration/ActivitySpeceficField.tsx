import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";

function ActivitySpeceficField() {
  const t = useTranslations("ngo-registration");

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={[]}
      label={t(
        "Are you specifically active in the following areas? (Please select all relevant options)",
      )}
      // orientation="horizontal"
    >
      <Checkbox className="my-1" value="women">
        {t("Women")}
      </Checkbox>
      <Checkbox className="my-1" value="teaching">
        {t("Teaching")}
      </Checkbox>
      <Checkbox className="my-1" value="children">
        {t("Children")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default ActivitySpeceficField;
