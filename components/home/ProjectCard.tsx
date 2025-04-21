import Image from "next/image";
import { useTranslations } from "next-intl";

import CardBtn from "./CardBtn";

import PlaceHolderImage from "@/public/images/placeholder.png";

function ProjectCard({ project }: { project: any }) {
  const t = useTranslations("projects");

  return (
    <div className="border border-slate-400 dark:border-secondary rounded-md flex flex-col md:flex-row gap-2 relative shadow-md">
      <Image
        alt="Project 1"
        className="object-contain w-full md:w-1/3 h-full"
        height={100}
        src={project?.visualDocuments[0]?.files[0] || PlaceHolderImage}
        width={100}
      />
      <div className="py-6 px-2">
        <h4 className="text-bold p-2 text-wrap">{project?.name}</h4>
        <p className="text-sm font-light p-2  overflow-hidden text-wrap">
          {project?.description}
        </p>
        <div className="p-2  right-1 top-1 bg-primary text-gray rounded-md w-max my-2">
          <span className="text-xs">
            {project?.status?.includes("ongoing")
              ? t("Ongoing")
              : project?.status.includes("completed")
                ? t("Completed")
                : ""}
          </span>
        </div>
        <CardBtn />
      </div>
    </div>
  );
}

export default ProjectCard;
