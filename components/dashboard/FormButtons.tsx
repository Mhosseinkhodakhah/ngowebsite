"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

function FormButtons({
  isLoading,
  isDisabled,
}: {
  isLoading: boolean;
  isDisabled: boolean;
}) {
  const t = useTranslations("ngo-registration");
  const router = useRouter();

  return (
    <div className="flex gap-4">
      <Button
        className="text-gray"
        color="primary"
        isDisabled={isDisabled}
        isLoading={isLoading}
        type="submit"
      >
        {t("Submit")}
      </Button>
      <Button
        className="text-gray"
        color="secondary"
        onPress={() => router.back()}
      >
        {t("Cancel")}
      </Button>
    </div>
  );
}

export default FormButtons;
