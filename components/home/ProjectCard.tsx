import Image from "next/image";
import { useTranslations } from "next-intl";

import { Chip } from "@heroui/chip";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

import CardBtn from "./CardBtn";

import PlaceHolderImage from "@/public/images/placeholder.png";
import { Divider } from "@heroui/divider";
import { useParams } from "next/navigation";

function ProjectCard({ project }: { project: any }) {
  const t = useTranslations("projects");
  const { locale } = useParams();

  return (
    <Card className="w-full dark:bg-slate-900">
      <CardHeader>
        <div
          className={`w-full flex flex-col ${locale === "pe" ? "items-start" : "items-end"}`}
        >
          <Chip
            className="text-xs p-2  text-gray rounded-md w-max my-2"
            color="primary"
          >
            {project?.status?.includes("ongoing")
              ? t("Ongoing")
              : project?.status.includes("completed")
                ? t("Completed")
                : ""}
          </Chip>
          <Divider />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible">
        <Image
          alt="Project 1"
          className="w-full h-full"
          height={700}
          src={project?.visualDocuments[0]?.files[0] || PlaceHolderImage}
          width={700}
        />
        <div className="py-6 px-2">
          <h4 className="font-bold p-2 text-wrap">{project?.name}</h4>
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
