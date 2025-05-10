"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

import ImageBanner from "@/public/images/last-banner.jpeg";

function LastBanner() {
  const t = useTranslations("homePage");
  const { locale } = useParams();

  return (
    <section
      className="justify-around w-full gap-10 md:gap-10 lg:gap-20 my-10 mt-44 flex-wrap mx-auto rounded-lg max-w-screen-xl h-[500px] relative hidden md:flex"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        backgroundImage: `url(${ImageBanner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backdropFilter :
        // filter: "grayscale(50%)",
      }}
    >
      <div
        className={`w-full h-full flex items-center justify-center bg-black bg-opacity-80 top-0 left-0 rounded-lg`}
      >
        <div className=" h-[50%] w-[35%] justify-center flex flex-col gap-5 items-center ml-10  text-white">
          <h2 className="text-2xl text-start">{t("Evryone can help")}</h2>

          <Button className="w-1/2">
            <Link href={`${locale}/ngo/ngos-registration`}>
              {t("Join the Movement")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LastBanner;
