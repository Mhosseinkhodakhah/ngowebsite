import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";

import RegisterDatePicker from "./RegisterDatePicker";

function ActivityLicense() {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Licenses and Permits")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={[]}
        label={t(
          "Does your organization have licenses and permits for its activities?",
        )}
      >
        <Checkbox className="my-1" value="yes">
          {t("YES")}
        </Checkbox>
        <Checkbox className="my-1" value="no">
          {t("NO")}
        </Checkbox>
        <div className="flex flex-col items-start md:flex-row  md:items-center gap-4 w-full mt-5">
          <div className="flex items-center gap-4 w-full flex-1 flex-grow">
            <Input
              isRequired={false}
              label={t("If yes, where did you get this license?")}
              name="other"
            />
          </div>
        </div>
        <RegisterDatePicker />
      </CheckboxGroup>
    </>
  );
}

export default ActivityLicense;
