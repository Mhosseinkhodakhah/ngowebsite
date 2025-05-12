import { useTranslations } from "next-intl";
import Image from "next/image";

import Card from "../common/card";

import PaginationProjects from "./PaginationProject";

import PlaceHolder from "@/public/images/placeholder.png";
import Empty from "@/public/images/empty.webp";

function ProjectList({
  data,
  route,
  page,
  status,
}: {
  data: any;
  route: string;
  page: string;
  status: string;
}) {
  const t = useTranslations("projects");

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
              ngo={project?.ngo}
              route={`/projects/${route}/${project?._id}`}
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
        <div className="w-full flex justify-center items-center">
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
        <PaginationProjects page={page} route={route} status={status} />
      </div>
    </>
  );
}

export default ProjectList;
