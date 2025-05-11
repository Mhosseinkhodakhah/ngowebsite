"use client";

import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";

import { SearchIcon } from "../common/icons";

import handleQuery from "@/utils/handleQuery";
import { useRouter } from "@/i18n/navigation";

function SearchInput({ page }: { page: string }) {
  const t = useTranslations("projects");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const val = {
      route: "data-archive",
      page: page || 1,
      search: value,
    };

    const getQuery = handleQuery(val);

    router.push(getQuery);
  };

  return (
    <div
      className="max-w-screen-sm w-full my-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Input
        className="w-[90%] lg:w-full mx-auto"
        color="primary"
        placeholder={t("Search for images , videos and documents")}
        size="lg"
        startContent={<SearchIcon />}
        variant="bordered"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchInput;
