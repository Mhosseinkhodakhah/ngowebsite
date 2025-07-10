"use client";

import Image from "next/image";
import { Avatar } from "@heroui/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { useRouter } from "@/i18n/navigation";

import { Divider } from "@heroui/divider";
import { useParams } from "next/navigation";

import handleQuery from "@/utils/handleQuery";
import CardButton from "./card-button";

// const router = useRouter();

import PlaceHolder from "@/public/images/placeholder.png";
import { useTranslations } from "use-intl";

interface Props {
  name: string;
  imageUrl: string;
  description?: string;
  route?: string;
  btnText?: string;
  status?: string[];
  ngo?: any;
  admin?: string;
}

function CardComponent({
  name,
  imageUrl,
  description,
  route,
  btnText,
  status,
  ngo,
  admin,
}: Props) {
  const { locale } = useParams();

  const t = useTranslations("projects");

  return (
    <Card
      as="article"
      className="max-h-[65vh] h-[65vh] md:h-[65vh] border-1 border-secondary-100 dark:bg-slate-900 dark:shadow-slate-800 shadow-md"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <CardHeader>
        <div
          className={`w-full flex  ${locale === "pe" ? "justify-end" : "justify-start"} items-center gap-2`}
        >
          {admin ? (
            <>
              <Avatar
                alt={ngo?.username}
                className={`${locale === "pe" ? "order-2" : "order-1"}`}
                src={PlaceHolder.src}
              />
              <span className={`${locale === "pe" ? "order-1" : "order-2"}`}>
                {admin}
              </span>
            </>
          ) : (
            <>
              <Avatar
                alt={ngo?.username}
                className={`${locale === "pe" ? "order-2" : "order-1"}`}
                src={ngo?.logo || PlaceHolder.src}
              />
              <span className={`${locale === "pe" ? "order-1" : "order-2"}`}>
                {ngo?.username}
              </span>
            </>
          )}
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-hidden">
        <div className="flex flex-col justify-between">
          <Image
            alt="project"
            className="w-full  h-[200px] lg:[150px] lg:max-h-[150px] rounded-md"
            height={800}
            src={!!imageUrl ? imageUrl : PlaceHolder.src}
            width={800}
          />
          <Divider className="my-2" />
          {status && (
            <div
              className={`w-full flex gap-2 ${locale === "pe" ? "items-start" : "items-end"}  `}
            >
              {status.includes("video") && (
                // <Chip size="sm">
                <Icon
                  icon="vscode-icons:file-type-video"
                  width="24"
                  height="24"
                />
                // </Chip>
              )}

              {status.includes("image") && (
                // <Chip  size="sm">
                <Icon icon="fluent-color:image-28" width="26" height="26" />
                // </Chip>
              )}
              {status.includes("pdf") && (
                // <Chip size="sm">
                <Icon icon="material-icon-theme:pdf" width="24" height="24" />
                // </Chip>
              )}

              {status.includes("word") && (
                // <Chip size="sm">
                <Icon
                  icon="vscode-icons:file-type-word"
                  width="24"
                  height="24"
                />
                // </Chip>
              )}
              {status.includes("ongoing") && (
                <Chip className=" text-[10px]" size="sm">
                  {t("Ongoing")}
                </Chip>
              )}
              {status.includes("completed") && (
                <Chip className=" text-[10px]" size="sm">
                  {t("Completed")}
                </Chip>
              )}
              {status.includes("goodPractice") && (
                <Chip className=" text-[10px]" size="sm">
                  {t("Good Practice")}
                </Chip>
              )}
              {status.includes("collaborationOpportunities") && (
                <Chip className=" text-[10px]" size="sm">
                  {t("Collaboration Opportunities")}
                </Chip>
              )}
            </div>
          )}
          <div className="py-6 px-2">
            <h4 className={`font-bold p-2 text-wrap text-start`}>
              {name?.slice(0, 100)}...
            </h4>
            <p className={`text-sm font-light text-wrap text-start`}>
              {description?.slice(0, 100)}...
            </p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex justify-end w-full">
          {route && <CardButton btnText={btnText} route={route} />}
        </div>
      </CardFooter>
    </Card>
    // <article className="border border-slate-400 dark:border-secondary rounded-md flex flex-col  gap-2  shadow-md relative h-[60vh]">

    // </article>
  );
}

export default CardComponent;
