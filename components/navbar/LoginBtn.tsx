import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useTranslations } from "next-intl";

import LoginIcon from "../common/icons/login";

const LoginBtn = () => {
  const t = useTranslations("navbar");

  return (
    <Button
      as={Link}
      className="font-normal text-gray bg-primary"
      endContent={<LoginIcon className="text-lg" />}
      href={"login"}
      size="sm"
      variant="shadow"
    >
      {t("Login")}
    </Button>
  );
};

export default LoginBtn;
