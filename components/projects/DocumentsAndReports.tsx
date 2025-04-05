import { useTranslations } from "next-intl";

function DocumentsAndReports({ data }: { data: any }) {
  const t = useTranslations("projects");

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20">
        {t("Documents and Reports")}
      </h1>
    </section>
  );
}

export default DocumentsAndReports;
