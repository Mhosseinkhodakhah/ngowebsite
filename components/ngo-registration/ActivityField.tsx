import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";

function ActivityField() {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Activity Field")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0"
        defaultValue={[]}
        label={t("Please select the field of ngo activity")}
        // orientation="horizontal"
      >
        <div className="flex flex-col md:flex-row md:justify-between w-full ">
          <div className="flex flex-col md:gap-4 md:my-4">
            <Checkbox className="mt-1 md:mt-0" value="environment">
              {t("Environment")}
            </Checkbox>
            <Checkbox className="mt-1 md:mt-0" value="language">
              {t("Language")}
            </Checkbox>
          </div>
          <div className="flex flex-col md:gap-4 md:my-4">
            <Checkbox className="mt-1 md:mt-0" value="education-and-culture">
              {t("Education and Culture")}
            </Checkbox>
            <Checkbox className="mt-1 md:mt-0" value="training">
              {t("Training")}
            </Checkbox>
          </div>
          <div className="flex flex-col md:gap-4 md:my-4">
            <Checkbox className="mt-1 md:mt-0" value="Health-Wellness">
              {t("Health & Wellness")}
            </Checkbox>
            <Checkbox className="mt-1 md:mt-0" value="sustainable-development">
              {t("Sustainable development")}
            </Checkbox>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center items-start mt-5 gap-4 w-full ">
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

export default ActivityField;
