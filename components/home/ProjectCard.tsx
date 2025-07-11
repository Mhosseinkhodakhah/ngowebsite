import Image from "next/image";
import { useTranslations } from "next-intl";
import { Divider } from "@heroui/divider";
import { Avatar } from "@heroui/avatar";
import { useParams } from "next/navigation";
import { Chip } from "@heroui/chip";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

import CardBtn from "./CardBtn";

import PlaceHolderImage from "@/public/images/placeholder.png";

function ProjectCard({ project }: { project: any }) {
  const t = useTranslations("projects");
  const { locale } = useParams();

  console.log("asdfaf", project);

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
        <div className="flex flex-col justify-between">
          <Image
            alt="Project"
            className="w-full h-[150px] max-h-[150px] rounded-md"
            height={700}
            src={project?.visualDocuments[0]?.files[0] || PlaceHolderImage}
            width={700}
          />
          <div className="flex gap-2 flex-wrap items-center">
            {project?.status?.includes("ongoing") && (
              <Chip
                className="text-[10px] rounded-xl w-max my-1"
                size="sm"
                // color="warning"
              >
                {t("Ongoing")}
              </Chip>
            )}
            {project?.status?.includes("completed") && (
              <Chip
                className="text-[10px] p-2  rounded-xl w-max my-1"
                size="sm"
                // color="success"
              >
                {t("Completed")}
              </Chip>
            )}
            {project?.status?.includes("collaborationOpportunities") && (
              <Chip
                className="text-[8px] p-2 rounded-xl w-max my-1"
                size="sm"
                // color="primary"
              >
                {t("Collaboration Opportunities")}
              </Chip>
            )}
            {project?.status?.includes("goodPractice") && (
              <Chip
                className="text-[9px] p-2 rounded-xl w-max my-1"
                size="sm"
                // color="primary"
              >
                {t("Good Practice")}
              </Chip>
            )}
          </div>

          <div
            className={`py-6 px-2`}
            dir={project.language === "en" ? "ltr" : "rtl"}
          >
            <h4
              className={`font-bold p-2 text-wrap ${project.language === "en" ? "text-left" : "text-right"}`}
            >
              {project?.name?.slice(0, 100)}...
            </h4>
            <p
              className={`text-sm font-light p-2 ${project.language === "en" ? "text-left" : "text-right"}`}
            >
              {project?.description?.slice(0, 100)}...
            </p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="p-1">
        <div className="flex justify-end w-full">
          <CardBtn status={project?.status} id={project?._id} />
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
