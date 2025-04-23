import { useTranslations } from "next-intl";

function Loading() {
  const t = useTranslations("common");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="loader" />
      <h4>{t("Please Waiting")}</h4>
    </div>
  );
}

export default Loading;
