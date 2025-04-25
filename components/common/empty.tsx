import EmptyImg from "@/public/images/Empty.png";
import { useTranslations } from "next-intl";

import Image from "next/image";

function Empty({ description }: { description: string }) {
  const t = useTranslations("common");

  return (
    <div className="mt-10 flex flex-col gap-4 items-center py-10">
      <Image
        alt="Empty"
        className="rounded-md"
        height={300}
        src={EmptyImg}
        width={300}
      />
      <h4 className="text-xl">{t(description)}</h4>
    </div>
  );
}

export default Empty;
