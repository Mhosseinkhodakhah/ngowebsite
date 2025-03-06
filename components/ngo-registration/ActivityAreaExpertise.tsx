import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";

function ActivityAreaExpertise() {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Area of expertise")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={[]}
        label={t(
          "What is your organization's main area of expertise in the field of intangible cultural heritage? (Select all relevant options)",
        )}
        // orientation="horizontal"
      >
        <Checkbox className="my-1" value="women">
          {t("Traditions and oral expressions")}
        </Checkbox>
        <Checkbox className="my-1" value="teaching-children">
          {t("Performing Arts (such as music, dance, theater)")}
        </Checkbox>
        <Checkbox className="my-1" value="africa">
          {t("Social rites, ceremonies and festival events")}
        </Checkbox>
        <Checkbox className="my-1" value="africa">
          {t("Traditional handicrafts")}
        </Checkbox>
        <Checkbox className="my-1" value="africa">
          {t("knowledge and traditions related to nature and the universe")}
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

export default ActivityAreaExpertise;
