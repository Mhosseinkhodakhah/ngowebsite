import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { FormikProps } from "formik";
import { useTranslations } from "next-intl";

function ProjectTarget({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("dashboard");

  const handleSetProjectTarget = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      if (lastValue !== "other") {
        formik.setFieldValue("otherGoalAndAchievements", "");
        formik.setFieldValue("goalAndAchievements", value);
      } else {
        formik.setFieldValue("goalAndAchievements", []);
        formik.setFieldValue("goalAndAchievements", lastValue);
      }
    }
  };

  return (
    <>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 mt-8"
        defaultValue={[]}
        label={t("Expected goals and achievements")}
        {...formik.getFieldProps("goalAndAchievements")}
        onChange={handleSetProjectTarget}
      >
        <Checkbox className="my-1" value="goodPractice">
          {t("Preservation and revitalization of intangible cultural heritage")}
        </Checkbox>
        <Checkbox className="my-1" value="ongoing">
          {t(
            "Educating and Passing on Knowledge to the Future Hype Generation"
          )}
        </Checkbox>
        <Checkbox className="my-1" value="completed">
          {t("Documentation and Archiving of Related Information")}
        </Checkbox>
        <Checkbox className="my-1" value="collaborationOpportunities">
          {t(
            "Increasing public awareness and participation of local communities"
          )}
        </Checkbox>
        <Checkbox className="my-1" value="public">
          {t(
            "Creating economic opportunities for heritage bearers (eg, supporting local artists)"
          )}
        </Checkbox>
        <Checkbox className="my-1" value="other">
          {t("Other")}
        </Checkbox>
      </CheckboxGroup>
      <div className="flex items-center gap-4 flex-1 mx-4 md:mx-0 mt-2">
        <Input isRequired={false} label={t("Please specify")} name="other" />
      </div>
    </>
  );
}

export default ProjectTarget;
