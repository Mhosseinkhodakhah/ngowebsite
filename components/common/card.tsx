import Image from "next/image";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

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
  return (
    <Card
      as="article"
      className="max-h-[55vh] h-[55vh] border-1 border-secondary-100"
    >
      <CardHeader>
        {status && (
          <Chip
            className="absolute right-2 top-2 text-gray "
            color="primary"
            size="sm"
          >
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
        )}
      </CardHeader>
      <CardBody>
        <Image
          alt="placeholder"
          className="object-contain w-full h-1/3"
          height={100}
          src={!!imageUrl ? imageUrl : PlaceHolder}
          width={100}
        />
        <div className="py-6 px-2">
          {ngo && (
            <Chip className="text-gray " color="primary" size="sm">
              {ngo}
            </Chip>
          )}
          <h4 className="text-bold p-2 text-wrap">{name}</h4>
          <p className="text-sm font-light line-clamp-3">{description}</p>
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
