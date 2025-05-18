/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

function Children({ data }: { data: any }) {
  const { locale } = useParams();
  const router = useRouter();

  return (
    <section className="flex justify-around w-full gap-10 md:gap-10 lg:gap-20 my-10 flex-wrap mx-auto bg-slate-200 dark:bg-slate-900 p-10 rounded-md">
      {data?.middleImages?.map(
        (item: { _id: string; ruPictures: string[] }, index: number) => (
          <div key={item._id} data-aos="fade-up" data-aos-duration="1000">
            {index !== 1 ? (
              <Image
                alt="children"
                className="rounded-3xl lg:rounded-[80px] w-40 h-52 md:w-48 md:h-60 lg:w-60 lg:h-80 object-cover cursor-pointer"
                height={800}
                src={item.ruPictures[0]}
                width={800}
                onClick={() => router.push(`/${locale}/events/${item._id}`)}
              />
            ) : (
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/${locale}/events/${item._id}`)}
              >
                <Image
                  alt="children"
                  className="rounded-t-3xl lg:rounded-t-[80px] w-40 h-52 md:w-48 md:h-60 lg:w-60 lg:h-80 grayscale object-cover"
                  height={800}
                  src={item.ruPictures[0]}
                  width={800}
                />
                <div className="bg-primary text-gray absolute bottom-0 w-full bg-opacity-90 text-center text-xs pt-2 px-1 rounded-md text-wrap overflow-hidden py-2">
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
        )
      )}
    </section>
  );
}

export default Children;
