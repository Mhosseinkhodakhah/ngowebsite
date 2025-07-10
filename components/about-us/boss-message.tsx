"use client";

import { Avatar } from "@heroui/avatar";
import { useParams } from "next/navigation";
import { Divider } from "@heroui/divider";

function BossMessage({ data }: { data: any }) {
  const { locale } = useParams();

  return (
    <div className="flex flex-col w-full max-w-screen-lg justify-start items-center mt-32">
      {data?.permitedToShowFirstManager && (
        <>
          <Divider className="my-4" />

          <div
            className="flex flex-col gap-10 lg:flex-row lg:gap-2 justify-start items-start mt-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-full lg:w-2/3 order-2 lg:order-2">
              <p className="text-justify leading-8 px-6 lg:px-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      locale === "pe"
                        ? data?.peFirstManagerDescription
                        : locale === "en"
                          ? data?.enFirstManagerDescription
                          : data?.ruFirstManagerDescription,
                  }}
                  className="font-bold text-lg px-6 lg:px-0"
                />
              </p>
              <Divider className="my-4" />

              <p className="font-bold text-lg px-6">
                {locale === "pe"
                  ? data?.peFirstManagerFooterTitle
                  : locale === "en"
                    ? data?.enFirstManagerFooterTitle
                    : data?.ruFirstManagerFooterTitle}
              </p>
              <p className="font-light text-lg px-8 lg:px-0">
                {locale === "pe"
                  ? data?.peFirstManagerFooterDescription
                  : locale === "en"
                    ? data?.enFirstManagerFooterDescription
                    : data?.ruFirstManagerFooterDescription}
              </p>
            </div>
            <div className="w-full lg:w-1/3 order-1 lg:order-2 flex justify-center items-center">
              <Avatar
                className="mr-3 w-[300px] h-[300px]"
                src={data?.firstManagerImage[0]}
              />
            </div>
          </div>

          <Divider className="my-4" />
        </>
      )}

      {data?.permitedToShowSecondManager && (
        <>
          <div
            className="flex flex-col gap-10 lg:flex-row lg:gap-2 justify-start items-start mt-32"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-full flex justify-center items-center  lg:w-1/3">
              <Avatar
                className="mr-3 w-[300px] h-[300px] "
                src={data?.secondManagerImage[0]}
              />
            </div>
            <div className="w-full px-6 lg:px-0 lg:w-2/3">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "pe"
                      ? data?.peSecondManagerDescription
                      : locale === "en"
                        ? data?.enSecondManagerDescription
                        : data?.ruSecondManagerDescription,
                }}
                className="font-bold text-lg px-6 lg:px-0"
              />
              <Divider className="my-4" />
              <p className="font-bold text-lg px-2">
                {locale === "pe"
                  ? data?.peSecondManagerFooterTitle
                  : locale === "en"
                    ? data?.enSecondManagerFooterTitle
                    : data?.ruSecondManagerFooterTitle}
              </p>
              <p className="font-light text-lg px-4">
                {locale === "pe"
                  ? data?.peSecondManagerFooterDescription
                  : locale === "en"
                    ? data?.enSecondManagerFooterDescription
                    : data?.ruSecondManagerFooterDescription}
              </p>
            </div>
          </div>

          <Divider className="my-4" />
        </>
      )}
    </div>
  );
}

export default BossMessage;
