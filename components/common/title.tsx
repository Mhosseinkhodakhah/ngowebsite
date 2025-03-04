import { useTranslations } from "next-intl";

function Title({
  titleText,
  description,
  page,
}: {
  titleText: string;
  description?: string;
  page?: string;
}) {
  const t = useTranslations(page === "aboutUs" ? "aboutUs" : "navbar");

  return (
    <>
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20">
        {t(titleText)}
      </h1>
      <p className="mt-5 max-w-md text-center text-secondary dark:text-gray font-light">
        {description}
      </p>
    </>
  );
}

export default Title;
