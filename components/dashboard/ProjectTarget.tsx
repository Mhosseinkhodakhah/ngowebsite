import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";

function ProjectTarget() {
  const t = useTranslations("dashboard");

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 mt-8"
      defaultValue={[]}
      label={t("Expected goals and achievements")}
    >
      <Checkbox className="my-1" value="goodPractice">
        {t("Preservation and revitalization of intangible cultural heritage")}
      </Checkbox>
      <Checkbox className="my-1" value="ongoing">
        {t("Educating and Passing on Knowledge to the Future Hype Generation")}
      </Checkbox>
      <Checkbox className="my-1" value="completed">
        {t("Documentation and Archiving of Related Information")}
      </Checkbox>
      <Checkbox className="my-1" value="collaborationOpportunities">
        {t(
          "Increasing public awareness and participation of local communities",
        )}
      </Checkbox>
      <Checkbox className="my-1" value="public">
        {t(
          "Creating economic opportunities for heritage bearers (eg, supporting local artists)",
        )}
      </Checkbox>
      <div className="flex flex-col items-start md:flex-row  md:items-center gap-4 w-full mt-5">
        <Checkbox value="other">{t("Other")}</Checkbox>
        <div className="flex items-center gap-4 w-full flex-1 flex-grow">
          <Input isRequired={false} label={t("Please specify")} name="other" />
        </div>
      </div>
    </CheckboxGroup>
  );
}

export default ProjectTarget;
