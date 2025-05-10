"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

function Children({ data }: { data: any }) {
  const { locale } = useParams();

  return (
    <section className="flex justify-around w-full gap-10 md:gap-10 lg:gap-20 my-10 flex-wrap mx-auto bg-slate-200 dark:bg-slate-900 p-10 rounded-md">
      {data?.middleImages?.map((images: string, index: number) => (
        <div key={images} data-aos="fade-up" data-aos-duration="1000">
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
                className="rounded-t-3xl lg:rounded-t-[80px] w-40 h-52 md:w-48 md:h-60 lg:w-60 lg:h-80 grayscale object-cover"
                height={300}
                src={images}
                width={300}
              />
              <div className="bg-primary text-gray absolute bottom-0 w-full bg-opacity-90 text-center text-xs pt-2 px-1  text-wrap overflow-hidden py-2">
                <p className="line-clamp-3 text-xs font-light">
                  {locale === "pe"
                    ? data?.peMiddleImageDescription
                    : locale === "en"
                      ? data?.enMiddleImageDescription
                      : data?.ruMiddleImageDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Children;
