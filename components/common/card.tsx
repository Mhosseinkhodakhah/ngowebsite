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
        <Image
          alt="project"
          className="w-full h-full max-h-[140px] rounded-md"
          height={700}
          src={!!imageUrl ? imageUrl : PlaceHolder.src}
          width={700}
        />
        {status && (
          <div
            className={`w-full flex gap-2 ${locale === "pe" ? "items-start" : "items-end"} mt-2 `}
          >
            {status.includes("video") && (
              <Chip className="text-gray " color="primary" size="sm">
                <Icon height="30" icon="lets-icons:video-fill" width="24" />
              </Chip>
            )}

            {status.includes("image") && (
              <Chip className="text-gray " color="primary" size="sm">
                <Icon height="30" icon="mynaui:image-solid" width="24" />
              </Chip>
            )}
            {status.includes("pdf") && (
              <Chip className="text-gray " color="primary" size="sm">
                <Icon icon="teenyicons:pdf-solid" width="15" height="15" />
              </Chip>
            )}

            {status.includes("word") && (
              <Chip className="text-gray " color="primary" size="sm">
                <Icon icon="flowbite:file-word-solid" width="24" height="24" />
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
