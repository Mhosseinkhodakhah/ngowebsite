import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";

function CooperateCheck() {
  const t = useTranslations("ngo-registration");

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={[]}
      label={t("Do you want to cooperate with other NGOs?")}
    >
      <Checkbox className="my-1" value="yes">
        {t("YES")}
      </Checkbox>
      <Checkbox className="my-1" value="no">
        {t("NO")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default CooperateCheck;
