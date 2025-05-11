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
    <Card
      as="article"
      className="max-h-[65vh] h-[60vh] md:h-[55vh] border-1 border-secondary-100 dark:bg-slate-900 dark:shadow-slate-800 shadow-md"
    >
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
          alt="Project"
          className="w-full h-full max-h-[100px]"
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
        <div className="flex justify-end w-full">
          <CardBtn />
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
