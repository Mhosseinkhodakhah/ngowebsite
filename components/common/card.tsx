"use client";

import Image from "next/image";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";

import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";
import { useParams } from "next/navigation";

import CardButton from "./card-button";

import PlaceHolder from "@/public/images/placeholder.png";

interface Props {
  name: string;
  imageUrl: string;
  description?: string;
  route?: string;
  btnText?: string;
  status?: string;
  ngo?: string;
}

function CardComponent({
  name,
  imageUrl,
  description,
  route,
  btnText,
  status,
  ngo,
}: Props) {
  const { locale } = useParams();

  return (
    <Card
      as="article"
      className="max-h-[65vh] h-[60vh] md:h-[55vh] border-1 border-secondary-100 dark:bg-slate-900 dark:shadow-slate-800 shadow-md"
    >
      <CardHeader>
        {status && (
          <div
            className={`w-full flex flex-col ${locale === "pe" ? "items-start" : "items-end"} `}
          >
            <Chip className="text-gray " color="primary" size="sm">
              {status === "vodeo" && (
                <Icon height="30" icon="lets-icons:video-fill" width="24" />
              )}
              {status === "image" && (
                <Icon height="30" icon="mynaui:image-solid" width="24" />
              )}
              {status === "document" && (
                <Icon height="30" icon="solar:document-bold" width="24" />
              )}
              {status !== "vodeo" &&
                status !== "image" &&
                status !== "document" &&
                status}
            </Chip>
            <Divider className="mt-2" />
          </div>
        )}
      </CardHeader>
      <CardBody>
        <Image
          alt="project"
          className="w-full h-full max-h-[80px]"
          height={700}
          src={!!imageUrl ? imageUrl : PlaceHolder}
          width={700}
        />

        <div className="py-6 px-2">
          {ngo && (
            <Chip color="primary" size="sm" variant="bordered">
              {ngo}
            </Chip>
          )}
          <h4 className={`font-bold p-2 text-wrap text-start`}>{name}</h4>
          <p className={`text-sm font-light line-clamp-3 text-start`}>
            {description}
          </p>
        </div>
      </CardBody>
      <CardFooter>
        {route && <CardButton btnText={btnText} route={route} />}
      </CardFooter>
    </Card>
    // <article className="border border-slate-400 dark:border-secondary rounded-md flex flex-col  gap-2  shadow-md relative h-[60vh]">

    // </article>
  );
}

export default CardComponent;
