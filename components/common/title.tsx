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
    case "events":
      return "events";
    case "navbar":
      return "navbar";
    case "projects":
      return "projects";
    default:
      break;
  }
};

function Title({
  titleText,
  description,
  page,
  className,
}: {
  titleText: string;
  description?: string;
  page?: string;
  className?: string;
}) {
  const t = useTranslations(switechTranslate(page ? page : ""));

  return (
    <>
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20">
        {page ? t(titleText) : titleText}
      </h1>
      <p
        className={`mt-5  w-full  text-secondary dark:text-gray font-light px-4 md:px-0 ${className ? className : "text-center max-w-screen-md"}`}
      >
        {description}
      </p>
    </>
  );
}

export default Title;
