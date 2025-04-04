"use client";

import { Pagination } from "@heroui/pagination";

import { useRouter } from "@/i18n/navigation";

function PaginationProjects({
  route,
  page,
  status,
}: {
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
      total={10}
      variant="bordered"
      onChange={(value) => {
        router.push(`${route}?status=${status}&page=${value}`);
      }}
    />
  );
}

export default PaginationProjects;
