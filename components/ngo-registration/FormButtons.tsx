import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

function FormButtons({
  isDisabled,
  isLoading,
}: {
  isDisabled: boolean;
  isLoading: boolean;
}) {
  const t = useTranslations("ngo-registration");
  const { locale } = useParams();

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
      <Link href={`/${locale}/`}>
        <Button className="text-gray" color="secondary">
          {t("Cancel")}
        </Button>
      </Link>
    </div>
  );
}

export default FormButtons;
