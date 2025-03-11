import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";

import Title from "@/components/common/title";
import { SearchIcon } from "@/components/common/icons";
import Card from "@/components/common/card";
import { Pagination } from "@heroui/pagination";

function Page() {
  const t = useTranslations("projects");

  return (
    <section className="flex flex-col justify-center items-center">
      <Title page="projects" titleText="Digital Archive" />

      <div className="max-w-screen-sm w-full my-4">
        <Input
          className="w-full"
          color="primary"
          placeholder={t("Search for images , videos and documents")}
          size="lg"
          startContent={<SearchIcon />}
          variant="bordered"
        />
      </div>

      <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {new Array(10).fill({ id: 1 }).map((item, index) => (
          <Card
            key={index}
            btnText="See More"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            imageUrl="https://unsplash.it/g/640/425"
            name="Archive 1"
            route="/data-archive/4"
            status={"Image"}
          />
        ))}
      </div>

      <div className="mt-10 w-full justify-center items-center flex">
        <Pagination
          color="primary"
          initialPage={1}
          total={10}
          variant="faded"
        />
      </div>
    </section>
  );
}

export default Page;
