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
      <h1
        className="text-xl font-bold border-b-5 border-primary mt-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {page ? t(titleText) : titleText}
      </h1>
      {description ? (
        <p
          className={`mt-5  w-full  text-secondary dark:text-gray font-thin rounded-md  md:px-0 bg-slate-100 dark:bg-slate-500 text-sm p-4 ${className ? className : "text-center max-w-screen-md"}`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {description}
        </p>
      ) : (
        false
      )}
    </>
  );
}

export default Title;
