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
  const t = useTranslations(
    page === "aboutUs"
      ? "aboutUs"
      : page === "NGOPage"
        ? "NGOPage"
        : page === "statics"
          ? "statics"
          : page === "ngo-registration"
            ? "ngo-registration"
            : page === "dashboard"
              ? "dashboard"
              : page === "navbar"
                ? "navbar"
                : "",
  );

  return (
    <>
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20">
        {page ? t(titleText) : titleText}
      </h1>
      <p className="mt-5 max-w-md text-center text-secondary dark:text-gray font-light px-4 md:px-0">
        {description}
      </p>
    </>
  );
}

export default Title;
