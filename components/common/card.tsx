import Image from "next/image";

import CardButton from "./card-button";

interface Props {
  name: string;
  imageUrl: string;
  description: string;
  route: string;
}

function Card({ name, imageUrl, description, route }: Props) {
  return (
    <article className="border border-slate-400 dark:border-secondary rounded-md flex flex-col  gap-2  shadow-md">
      <Image
        alt="placeholder"
        className="object-fill w-full  h-full"
        height={100}
        src={imageUrl}
        width={100}
      />
      <div className="py-6 px-2">
        <h4 className="text-bold p-2 text-wrap">{name}</h4>
        <p className="text-sm font-light p-2  overflow-hidden text-wrap">
          {description}
        </p>
        <CardButton route={route} />
      </div>
    </article>
  );
}

export default Card;
