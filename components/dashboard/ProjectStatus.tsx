import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";

function ProjectStatus() {
  const t = useTranslations("dashboard");

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0"
      defaultValue={[]}
      label={t("Project Status")}
    >
      <Checkbox className="my-1" value="goodPractice">
        {t("Good Practice")}
      </Checkbox>
      <Checkbox className="my-1" value="ongoing">
        {t("Ongoing")}
      </Checkbox>
      <Checkbox className="my-1" value="completed">
        {t("Completed")}
      </Checkbox>
      <Checkbox className="my-1" value="collaborationOpportunities">
        {t("Collaboration Opportunities")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default ProjectStatus;
