import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";

function AreaActivity() {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Area and scope of activity")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0"
        defaultValue={[]}
        label={t("In which countries or regions do you primarily operate?")}
        // orientation="horizontal"
      >
        <Checkbox className="my-1" value="western-asia">
          {t("Western Asia")}
        </Checkbox>
        <Checkbox className="my-1" value="central-asia">
          {t("Central Asia")}
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

export default AreaActivity;
