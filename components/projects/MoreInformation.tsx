import { Snippet } from "@heroui/snippet";
import { useTranslations } from "next-intl";

function MoreInformation({ moreInformation }: { moreInformation: string }) {
  const t = useTranslations("projects");

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold border-b-5 border-primary mt-10">
        {t("More Information")}
      </h1>
      <Snippet
        className="flex items-center mt-10 "
        color="primary"
        symbol="🌐"
        variant="bordered"
      >
        {moreInformation}
      </Snippet>
    </section>
  );
}

export default MoreInformation;
