import { useTranslations } from "next-intl";
import Image from "next/image";

import Card from "../common/card";

import PaginationProjects from "./PaginationProject";

import PlaceHolder from "@/public/images/placeholder.png";
import Empty from "@/public/images/empty.webp";

function ProjectList({
  all,
  data,
  route,
  page,
  status,
}: {
  all: number;
  data: any;
  route: string;
  page: string;
  status: string;
}) {
  const t = useTranslations("projects");

  return (
    <>
      {data?.length ? (
        <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {data?.map((project: any) => (
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
              status={project?.status}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <Image
            alt="Empty"
            className="w-[200px] h-[200px] object-contain"
            height={500}
            src={Empty}
            width={500}
          />
        </div>
      )}

      {Math.floor(all / 10) > 0 && (
        <div className="mt-10 w-full justify-center items-center flex">
          <PaginationProjects
            all={all}
            page={page}
            route={route}
            status={status}
          />
        </div>
      )}
    </>
  );
}

export default ProjectList;
