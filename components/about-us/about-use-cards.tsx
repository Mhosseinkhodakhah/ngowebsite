"use client";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

function AboutUsCards() {
  const t = useTranslations("homePage");
  const tt = useTranslations("common");

  return (
    <div
      className="flex flex-col w-full max-w-screen-lg justify-center items-center mt-32"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div>
        <h2 className="font-bold text-2xl">
          {t("We Are Support NGOs to Help Them")}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row h-[120vh] md:h-auto w-full justify-between max-w-screen-lg my-32 gap-20 lg:gap-10 px-5">
        <div className="flex-1 bg-blue-100 relative lg:h-[25vh] flex justify-center items-center rounded-md shadow-md">
          <div className="bg-white flex justify-center items-center rounded-full h-[100px] w-[100px] mx-auto absolute -top-14 left-auto right-auto">
            <Icon
              color="#CCCCCC"
              height="64"
              icon="mdi:book-open-page-variant"
              width="64"
            />
          </div>
          <div className="py-20 mx-auto lg:py-10 w-full flex justify-center items-center flex-col">
            <h2>{t("Children educations")}</h2>
            <Button variant="light" size="sm" className="mt-4 text-[10px]">
              {tt("Read More")}
            </Button>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 relative h-[25vh] flex justify-center items-center rounded-md shadow-md">
          <div className="bg-white flex justify-center items-center rounded-full h-[100px] w-[100px] mx-auto absolute -top-14 left-auto right-auto">
            <Icon
              icon="icon-park-solid:sporting"
              width="64"
              height="64"
              color="#CCCCCC"
            />
          </div>
          <div className="py-20 mx-auto lg:py-10 w-full flex justify-center items-center flex-col">
            <h2>{t("Clean mineral water")}</h2>
            <Button variant="light" size="sm" className="mt-4 text-[10px]">
              {tt("Read More")}
            </Button>
          </div>
        </div>
        <div className="flex-1 bg-green-100 relative h-[25vh] flex justify-center items-center rounded-md shadow-md">
          <div className="bg-white flex justify-center items-center rounded-full h-[100px] w-[100px] mx-auto absolute -top-14 left-auto right-auto">
            <Icon icon="mdi:women" width="64" height="64" color="#CCCCCC" />
          </div>
          <div className="py-20 mx-auto lg:py-10 w-full flex justify-center items-center flex-col">
            <h2>{t("Surgery & treatment")}</h2>
            <Button
              className="mt-4 text-[10px] mx-auto"
              size="sm"
              variant="light"
            >
              {tt("Read More")}
            </Button>
          </div>
        </div>
        <div className="flex-1 bg-red-100 relative h-[25vh] flex justify-center items-center rounded-md  shadow-md">
          <div className="bg-white flex justify-center items-center rounded-full h-[100px] w-[100px] mx-auto absolute -top-14 left-auto right-auto">
            <Icon
              color="#CCCCCC"
              height="64"
              icon="mdi:climate-change"
              width="64"
            />
          </div>
          <div className="py-20 mx-auto lg:py-10 w-full flex justify-center items-center flex-col">
            <h2>{t("Healthy & good food")}</h2>
            <Button
              variant="light"
              size="sm"
              className="mt-4 text-[10px] mx-auto"
            >
              {tt("Read More")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCards;
