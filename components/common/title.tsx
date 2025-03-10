import { useTranslations } from "next-intl";

const switechTranslate = (translate: string) => {
  switch (translate) {
    case "aboutUs":
      return "aboutUs";
    case "NGOPage":
      return "NGOPage";
    case "statics":
      return "statics";
    case "ngo-registration":
      return "ngo-registration";
    case "dashboard":
      return "dashboard";
    case "education":
      return "education";
    case "navbar":
      return "navbar";
    default:
      break;
  }
};

function Title({
  titleText,
  description,
  page,
}: {
  titleText: string;
  description?: string;
  page?: string;
}) {
  const t = useTranslations(switechTranslate(page ? page : ""));

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
