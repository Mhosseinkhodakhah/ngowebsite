"use client";

import { Pagination } from "@heroui/pagination";

import { useRouter } from "@/i18n/navigation";
import handleQuery from "@/utils/handleQuery";

function PaginationArchive({
  all,
  page,
  search,
}: {
  all: number;
  page: string;
  search: string;
}) {
  const router = useRouter();

  return (
    <div className="mt-10 w-full justify-center items-center flex">
      <div className="mt-10 w-full justify-center items-center flex">
        <Pagination
          showControls
          showShadow
          classNames={{
            cursor: "bg-primary text-white",
          }}
          color="primary"
          initialPage={page ? +page : 1}
          total={Math.floor(all / 10)}
          variant="bordered"
          onChange={(value) => {
            const val = {
              route: "data-archive",
              page: value.toString(),
              search,
            };

            const getRoute = handleQuery(val);

            router.push(getRoute);
          }}
        />
      </div>
    </div>
  );
}

export default PaginationArchive;
