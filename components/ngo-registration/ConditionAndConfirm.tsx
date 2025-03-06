import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";

function ConditionAndConfirm() {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Confirm and send")}</h5>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={[]}
        label={t(
          "Does your organization have licenses and permits for its activities?",
        )}
      >
        <Checkbox className="my-1" value="confirm">
          {t(
            "I confirm that the information provided is correct and complete and that any liability arising from inaccuracy or This organization will be responsible for the inaccuracy of this information",
          )}
        </Checkbox>
        <Checkbox className="my-1" value="terms-and-condition">
          {t(
            "I have read the registration terms and conditions and I agree with them Any liability arising from non-compliance These conditions will be the responsibility of this organization",
          )}
        </Checkbox>
      </CheckboxGroup>
    </>
  );
}

export default ConditionAndConfirm;
