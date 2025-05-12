import { useTranslations } from "next-intl";

function Loading() {
  const t = useTranslations("common");

  return (
    <section className="flex flex-col items-center justify-center w-full md:w-3/5 lg:w-10/12 px-10 overflow-y-auto">
      <div className="loader" />
      <h4>{t("Please Waiting")}</h4>
    </section>
  );
}

export default Loading;
