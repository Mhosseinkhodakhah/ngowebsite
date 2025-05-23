"use client";

import { Pagination } from "@heroui/pagination";

import { useRouter } from "@/i18n/navigation";

function PaginationProjects({
  all,
  route,
  page,
  status,
}: {
  all: number;
  route: string;
  page: string;
  status: string;
}) {
  const router = useRouter();

  return (
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
        router.push(`${route}?status=${status}&page=${value}`);
      }}
    />
  );
}

export default PaginationProjects;
