import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";

function ActivityPopulationConcentration() {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Population concentration")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={[]}
        label={t(
          "What is the gender distribution of the community you are working with?",
        )}
        // orientation="horizontal"
      >
        <Checkbox className="my-1" value="male">
          {t("Mostly male")}
        </Checkbox>
        <Checkbox className="my-1" value="famale">
          {t("Mostly famale")}
        </Checkbox>
        <Checkbox className="my-1" value="balanced">
          {t("Balanced")}
        </Checkbox>
        <div className="flex flex-col items-start md:flex-row  md:items-center gap-4 w-full mt-5">
          <Checkbox value="other">{t("Other")}</Checkbox>
          <div className="flex items-center gap-4 w-full flex-1 flex-grow">
            <Input
              isRequired={false}
              label={t("Please specify")}
              name="other"
            />
          </div>
        </div>
      </CheckboxGroup>
    </>
  );
}

export default ActivityPopulationConcentration;
