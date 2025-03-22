import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

function FormButtons({
  isDisabled,
  isLoading,
}: {
  isDisabled: boolean;
  isLoading: boolean;
}) {
  const t = useTranslations("ngo-registration");

  return (
    <div className="flex gap-4 my-4">
      <Button
        className="text-gray"
        color="primary"
        isDisabled={!isDisabled}
        isLoading={isLoading}
        type="submit"
      >
        {isLoading ? t("Please Wait") : t("Submit")}
      </Button>
      <Button className="text-gray" color="secondary">
        {t("Cancel")}
      </Button>
    </div>
  );
}

export default FormButtons;
