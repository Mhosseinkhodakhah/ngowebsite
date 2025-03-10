import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";

function FilterItems() {
  const t = useTranslations("education");

  return (
    <div className="md:px-4">
      <CheckboxGroup
        className="md:px-0 md:mt-8"
        defaultValue={[]}
        label={t("Filter by file format")}
      >
        <Checkbox value="image">{t("Image")}</Checkbox>
        <Checkbox value="video">{t("Video")}</Checkbox>
        <Checkbox value="pdf">{t("PDF")}</Checkbox>
        <Checkbox value="word">{t("Word File")}</Checkbox>
      </CheckboxGroup>
    </div>
  );
}

export default FilterItems;
