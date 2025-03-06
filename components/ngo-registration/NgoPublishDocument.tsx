import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";

function NgoPublishDocument() {
  const t = useTranslations("ngo-registration");

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={[]}
      label={t("Is it allowed to publish information publicly?")}
      // orientation="horizontal"
    >
      <Checkbox className="my-1" value="yes">
        {t("YES")}
      </Checkbox>
      <Checkbox className="my-1" value="no">
        {t("NO")}
      </Checkbox>
      <Checkbox className="my-1" value="no">
        {t("Limited")}
      </Checkbox>
      <div className="flex flex-col items-start md:flex-row  md:items-center gap-4 w-full mt-5">
        <div className="flex items-center gap-4 w-full flex-1 flex-grow">
          <Input
            isRequired={false}
            label={t("Information authorized for publication")}
            name="other"
          />
        </div>
      </div>
    </CheckboxGroup>
  );
}

export default NgoPublishDocument;
