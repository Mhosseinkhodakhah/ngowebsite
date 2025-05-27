import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

function ProjectTarget({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("dashboard");

  const handleSetProjectTarget = (value: string[]) => {
    console.log('value selected >>>> ' , value)
    const lastValue = value[value.length - 1];

    if (value.length) {
      if (lastValue !== "other") {
        formik.setFieldValue("otherGoalAndAchievements", "");
      }
      formik.setFieldValue("goalAndAchievements", [lastValue]);
    } else {
      formik.setFieldValue("goalAndAchievements", []);
    }
  };

  return (
    <>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 mt-8"
        defaultValue={formik.values.goalAndAchievements}
        errorMessage={
          formik.errors.goalAndAchievements &&
          formik.touched.goalAndAchievements &&
          t(formik.errors.goalAndAchievements as unknown as FormikErrors<any>)
        }
        label={t("Expected goals and achievements")}
        {...formik.getFieldProps("goalAndAchievements")}
        onChange={handleSetProjectTarget}
      >
        <Checkbox
          className="my-1"
          value="Preservation and revitalization of intangible cultural heritage"
        >
          {t("Preservation and revitalization of intangible cultural heritage")}
        </Checkbox>
        <Checkbox
          className="my-1"
          value="Educating and Passing on Knowledge to the Future Hype Generation"
        >
          {t(
            "Educating and Passing on Knowledge to the Future Hype Generation",
          )}
        </Checkbox>
        <Checkbox
          className="my-1"
          value="Documentation and Archiving of Related Information"
        >
          {t("Documentation and Archiving of Related Information")}
        </Checkbox>
        <Checkbox
          className="my-1"
          value="Increasing public awareness and participation of local communities"
        >
          {t(
            "Increasing public awareness and participation of local communities",
          )}
        </Checkbox>
        <Checkbox
          className="my-1"
          value="Creating economic opportunities for heritage bearers (eg, supporting local artists"
        >
          {t(
            "Creating economic opportunities for heritage bearers (eg, supporting local artists)",
          )}
        </Checkbox>
        <Checkbox className="my-1" value="other">
          {t("Other")}
        </Checkbox>
      </CheckboxGroup>
      <div className="flex items-center gap-4 flex-1 mx-4 md:mx-0 mt-2">
        <Input
          disabled={
            formik.values.goalAndAchievements.includes("other") ? false : true
          }
          errorMessage={() => {
            if (
              formik.errors.goalAndAchievements &&
              formik.touched.goalAndAchievements
            ) {
              return t(formik.errors.goalAndAchievements);
            }
          }}
          isInvalid={
            formik.values.goalAndAchievements.includes("other") &&
            formik.errors.otherGoalAndAchievements &&
            formik.touched.otherGoalAndAchievements
              ? true
              : false
          }
          isRequired={
            formik.values.goalAndAchievements.includes("other") ? true : false
          }
          label={t("Please specify")}
          {...formik.getFieldProps("otherGoalAndAchievements")}
        />
      </div>
    </>
  );
}

export default ProjectTarget;
