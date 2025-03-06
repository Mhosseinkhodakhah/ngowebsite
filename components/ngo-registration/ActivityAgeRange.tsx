import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";

function ActivityAgeRange() {
  const t = useTranslations("ngo-registration");

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={[]}
      label={t(
        "What age groups does your organization mainly work with? (Select all relevant options)",
      )}
      // orientation="horizontal"
    >
      <Checkbox className="my-1" value="under 18">
        {t("Children (under 18 years old)")}
      </Checkbox>
      <Checkbox className="my-1" value="youth">
        {t("Youth (18-35 years)")}
      </Checkbox>
      <Checkbox className="my-1" value="adults">
        {t("Adults (36-60 years old)")}
      </Checkbox>
      <Checkbox className="my-1" value="elderly">
        {t("Elderly (over 60 years old)")}
      </Checkbox>
      <Checkbox className="my-1" value="all">
        {t("All age groups")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default ActivityAgeRange;
