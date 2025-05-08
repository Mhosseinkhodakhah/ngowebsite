import Image from "next/image";
import { useTranslations } from "next-intl";

import { Chip } from "@heroui/chip";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

import CardBtn from "./CardBtn";

import PlaceHolderImage from "@/public/images/placeholder.png";

function ProjectCard({ project }: { project: any }) {
  const t = useTranslations("projects");

  return (
    <Card className="w-full dark:bg-slate-900">
      <CardHeader>
        <Chip
          className="absolute text-xs p-2 right-1 top-1 text-gray rounded-md w-max my-2"
          color="primary"
        >
          {project?.status?.includes("ongoing")
            ? t("Ongoing")
            : project?.status.includes("completed")
              ? t("Completed")
              : ""}
        </Chip>
      </CardHeader>
      <CardBody className="overflow-visible">
        <Image
          alt="Project 1"
          className="object-contain w-full h-full"
          height={100}
          src={project?.visualDocuments[0]?.files[0] || PlaceHolderImage}
          width={100}
        />
        <div className="py-6 px-2">
          <h4 className="text-bold p-2 text-wrap">{project?.name}</h4>
          <p className="text-sm font-light p-2  overflow-hidden text-wrap line-clamp-4">
            {project?.description}
          </p>
        </div>
      </CardBody>
      <CardFooter>
        <CardBtn />
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
