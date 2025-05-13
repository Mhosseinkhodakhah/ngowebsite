"use client";

import Image from "next/image";
import { Avatar } from "@heroui/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";

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

  return (
    <Card
      as="article"
      className="max-h-[65vh] h-[65vh] md:h-[65vh] border-1 border-secondary-100 dark:bg-slate-900 dark:shadow-slate-800 shadow-md"
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
            </>
          )}
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-hidden">
        <Image
          alt="project"
          className="w-full h-full max-h-[140px] rounded-md"
          height={700}
          src={!!imageUrl ? imageUrl : PlaceHolder.src}
          width={700}
        />
        {status && (
          <div
            className={`w-full flex flex-col ${locale === "pe" ? "items-start" : "items-end"} mt-2`}
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
      </CardBody>
      <Divider className="mt-2" />
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
