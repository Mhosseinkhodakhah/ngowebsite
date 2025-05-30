import Image from "next/image";
import { useTranslations } from "next-intl";

import { Chip } from "@heroui/chip";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

import CardBtn from "./CardBtn";

import PlaceHolderImage from "@/public/images/placeholder.png";
import { Divider } from "@heroui/divider";
import { useParams } from "next/navigation";
import { Avatar } from "@heroui/avatar";

function ProjectCard({ project }: { project: any }) {
  const t = useTranslations("projects");
  const { locale } = useParams();

  return (
    <Card
      as="article"
      className="max-h-[65vh] h-[65vh] md:h-[65vh] border-1 border-secondary-100 dark:bg-slate-900 dark:shadow-slate-800 shadow-md"
    >
      <CardHeader>
        <div
          className={`w-full flex  ${locale === "pe" ? "justify-end" : "justify-start"} items-center gap-2`}
        >
          <span className={`${locale === "pe" ? "order-1" : "order-2"}`}>
            {project?.ngo?.username}
          </span>
          <Avatar
            alt={project?.ngo?.name}
            className={`${locale === "pe" ? "order-2" : "order-1"}`}
            src={project?.ngo?.logo || PlaceHolderImage}
          />
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-hidden">
        <Image
          alt="Project"
          className="w-full h-full max-h-[100px] rounded-md"
          height={700}
          src={project?.visualDocuments[0]?.files[0] || PlaceHolderImage}
          width={700}
        />
        <div className="flex gap-2 flex-wrap items-center">
          {project?.status?.includes("ongoing") && (
            <Chip
              className="text-[10px] text-gray rounded-md w-max my-2"
              color="warning"
            >
              {t("Ongoing")}
            </Chip>
          )}
          {project?.status?.includes("completed") && (
            <Chip
              className="text-[10px] p-2  text-gray rounded-md w-max my-2"
              color="success"
            >
              {t("Completed")}
            </Chip>
          )}
          {project?.status?.includes("collaborationOpportunities") && (
            <Chip
              className="text-[10px] p-2  text-gray rounded-md w-max my-2"
              color="primary"
            >
              {t("Collaboration Opportunities")}
            </Chip>
          )}
          {project?.status?.includes("goodPractice") && (
            <Chip
              className="text-[10px] p-2 text-gray rounded-md w-max my-2"
              color="primary"
            >
              {t("Good Practice")}
            </Chip>
          )}
        </div>

        <div className="py-6 px-2">
          <h4 className="font-bold p-2 text-wrap">
            {project?.name?.slice(0, 100)}...
          </h4>
          <p className="text-sm font-light p-2 ">
            {project?.description?.slice(0, 100)}...
          </p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex justify-end w-full">
          <CardBtn status={project?.status} id={project?._id} />
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
