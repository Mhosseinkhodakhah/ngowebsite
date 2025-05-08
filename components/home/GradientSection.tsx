"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import ChildrenImage from "@/public/images/ngowebsplash.webp";

function GradientSection() {
  const t = useTranslations("homePage");
  const { locale } = useParams();

  return (
    <section
      className="justify-around w-full gap-10 md:gap-10 lg:gap-20 my-10 mt-44 flex-wrap mx-auto rounded-lg max-w-screen-lg h-[500px] relative hidden md:flex"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        backgroundImage: `url(${ChildrenImage.src})`,
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
          <h2 className="text-2xl text-start">{t("Smile Project")}</h2>
          <p className="font-light w-2/3 text-center">
            {t("Spreading Joy Building Futures One Smile at a Time")}
          </p>
          <Button className="w-1/2">{t("Join the Movement")}</Button>
        </div>
      </div>
      {/* <Image alt="childrens" src={ChildrenImage} /> */}
    </section>
  );
}

export default GradientSection;
