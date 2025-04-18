"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

function Children({ data }: { data: any }) {
  const { locale } = useParams();

  return (
    <section className="flex justify-around w-full  gap-10 md:gap-10 lg:gap-20 my-10 flex-wrap mx-auto">
      {data?.middleImages?.map((images: string, index: number) => (
        <div key={images}>
          {index !== 1 ? (
            <Image
              alt="children"
              className="rounded-3xl lg:rounded-[80px] w-40 h-52 md:w-48 md:h-60 lg:w-60 lg:h-80 object-cover"
              height={300}
              src={images}
              width={300}
            />
          ) : (
            <div className="relative">
              <Image
                alt="children"
                className="rounded-3xl lg:rounded-[80px] w-40 h-52 md:w-48 md:h-60 lg:w-60 lg:h-80 grayscale object-cover"
                height={300}
                src={images}
                width={300}
              />
              <div className="bg-primary text-gray absolute bottom-0 w-full h-20 text-center text-xs pt-2 px-1">
                {locale === "pe"
                  ? data?.peMiddleImageDescription
                  : locale === "en"
                    ? data?.enMiddleImageDescription
                    : data?.ruMiddleImageDescription}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Children;
