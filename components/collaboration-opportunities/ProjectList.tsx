"use client";

import { Pagination } from "@heroui/pagination";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

import Card from "../common/card";

import { getCategoryProjects } from "@/actions/projects";
import { useRouter } from "@/i18n/navigation";
import PlaceHolder from "@/public/images/placeholder.png";
import Empty from "@/public/images/empty.webp";

function ProjectList() {
  const t = useTranslations("projects");
  const searchParams = useSearchParams();

  const status: string | null = searchParams.get("status");
  const page: string | null = searchParams.get("page");

  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["getCategoryProjects", status, page],
    queryFn: () =>
      getCategoryProjects(
        status ? status : "collaborationOpportunities",
        page ? page : "1"
      ),
  });

  return (
    <>
      {data?.data.length ? (
        <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {data?.data?.map((project: any) => (
            <Card
              key={project?._id}
              btnText="Read More"
              description={project?.description}
              imageUrl={
                project?.documentsAndReport?.files.length > 0
                  ? project?.documentsAndReport?.files[0]
                  : PlaceHolder
              }
              name={project?.name}
              route={`/projects/collaboration-opportunities/${project?._id}`}
              status={
                project?.status[0] === "goodPractice"
                  ? t("Good Practice")
                  : project?.status[0] === "ongoing"
                    ? t("Ongoing")
                    : project?.status[0] === "completed"
                      ? t("Completed")
                      : project?.status[0] === "collaborationOpportunities"
                        ? t("Collaboration Opportunities")
                        : t("")
              }
            />
          ))}
        </div>
      ) : (
        <div className="w-full justify-center items-center flex">
          <Image
            alt="Empty"
            className="w-[200px] h-[200px] object-contain"
            height={100}
            src={Empty}
            width={100}
          />
        </div>
      )}

      <div className="mt-10 w-full justify-center items-center flex">
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
            router.push(
              `collaboration-opportunities?status=collaborationOpportunities&page=${value}`
            );
          }}
        />
      </div>
    </>
  );
}

export default ProjectList;
