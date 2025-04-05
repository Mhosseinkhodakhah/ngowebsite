import Image from "next/image";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";

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

function Card({
  name,
  imageUrl,
  description,
  route,
  btnText,
  status,
  ngo,
}: Props) {
  return (
    <article className="border border-slate-400 dark:border-secondary rounded-md flex flex-col  gap-2  shadow-md relative">
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
      <Image
        alt="placeholder"
        className="object-contain w-full  h-full min-h-[200px] "
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
        <p className="text-sm font-light p-2 overflow-hidden text-wrap line-clamp-3">
          {description}
        </p>
        {route && <CardButton btnText={btnText} route={route} />}
      </div>
    </article>
  );
}

export default Card;
