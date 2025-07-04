"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

import ChildrenImage from "@/public/images/ngowebsplash.webp";
import useStore from "@/store";

function GradientSection({ data }: { data: any }) {
  const t = useTranslations("homePage");
  const { locale } = useParams();
  const isLogin = useStore((state: any) => state.isLogin);

  return (
    <section
      className="justify-around w-full gap-10 md:gap-10 lg:gap-20 my-10 mt-44 flex-wrap mx-auto rounded-lg max-w-screen-xl h-[500px] relative hidden md:flex"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        backgroundImage: `url(${data?.firstBannerImage[0]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        // backdropFilter :
        filter: "grayscale(50%)",
      }}
    >
      <div
        className={`w-full h-full flex items-center ${locale === "pe" ? "justify-start" : "justify-end"}  bg-gradient-to-l from-primary top-0 left-0 rounded-lg`}
        style={{
          background: `linear-gradient(270deg,rgba(33, 133, 213, 1) 29%, rgba(255, 255, 255, 0.06) 80%)`,
        }}
      >
        <div className=" h-[50%] w-[35%] justify-center flex flex-col gap-5 items-center ml-10  text-white">
          <p className="font-light w-2/3 text-center">
            {locale === "fa"
              ? data?.peFirstBannerDescription
              : locale === "en"
                ? data?.enFirstBannerDescription
                : data?.ruFirstBannerDescription}
          </p>
          {!isLogin && (
            <Button className="w-1/2">
              <Link href={`${locale}/ngo/ngos-registration`}>
                {t("Join the Movement")}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default GradientSection;
