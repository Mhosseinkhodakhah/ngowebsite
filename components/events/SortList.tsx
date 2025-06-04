import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

import SortDropDown from "./SortDropDown";
import FilterModal from "./FilterModal";

import handleQuery from "@/utils/handleQuery";
import { useRouter } from "@/i18n/navigation";

function SortList({
  total,
  query,
}: {
  total: number;
  query: {
    end: any;
    start: any;
    sort: any;
    type: any;
    page: any;
  };
}) {
  const t = useTranslations("common");

  const router = useRouter();

  return (
    <div className="flex justify-between py-4">
      <div className="hidden md:flex gap-4">
        <Icon height="20" icon="icon-park-outline:sort-two" width="20" />
        <h6 className="font-bold">{t("Sort")}</h6>
        <Chip
          className="cursor-pointer"
          color="primary"
          startContent={
            query.sort === "recent" && (
              <Icon height="24" icon="lets-icons:check-fill" width="24" />
            )
          }
          variant="faded"
          onClick={() => {
            const val = {
              route: "events",
              start: query.start,
              end: query.end,
              type: query.type,
              page: query.page,
              sort: "recent",
            };

            const getRouter = handleQuery(val);

            router.push(getRouter);
          }}
        >
          {t("Recently")}
        </Chip>
        <Chip
          className="cursor-pointer"
          color="primary"
          startContent={
            query.sort === "latest" && (
              <Icon height="24" icon="lets-icons:check-fill" width="24" />
            )
          }
          variant="faded"
          onClick={() => {
            const val = {
              route: "events",
              start: query.start,
              end: query.end,
              type: query.type,
              page: query.page,
              sort: "latest",
            };

            const getRouter = handleQuery(val);

            router.push(getRouter);
          }}
        >
          {t("Last")}
        </Chip>
        <Chip
          className="cursor-pointer"
          color="primary"
          startContent={
            query.sort === "mostViews" && (
              <Icon height="24" icon="lets-icons:check-fill" width="24" />
            )
          }
          variant="faded"
          onClick={() => {
            const val = {
              route: "events",
              start: query.start,
              end: query.end,
              type: query.type,
              page: query.page,
              sort: "mostViews",
            };

            const getRouter = handleQuery(val);
            router.push(getRouter);
          }}
        >
          {t("mostViewd")}
        </Chip>
        <Chip
          className="cursor-pointer"
          color="primary"
          startContent={
            query.sort === "all" && (
              <Icon height="24" icon="lets-icons:check-fill" width="24" />
            )
          }
          variant="faded"
          onClick={() => {
            const val = {
              route: "events",
              start: query.start,
              end: query.end,
              type: query.type,
              page: query.page,
              sort: "all",
            };

            const getRouter = handleQuery(val);
            router.push(getRouter);
          }}
        >
          {t("All")}
        </Chip>
      </div>
      <div className="flex gap-2">
        <SortDropDown />
        <FilterModal />
      </div>
      <div className="flex items-center gap-4">
        <h5>{t("Total")}</h5>
        <Chip className="text-gray" color="primary" variant="shadow">
          {total}
        </Chip>
      </div>
    </div>
  );
}

export default SortList;
