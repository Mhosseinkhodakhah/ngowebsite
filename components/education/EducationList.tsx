"use client";

import { Pagination } from "@heroui/pagination";
import { useParams } from "next/navigation";

import Card from "../common/card";

import SortList from "./SortList";

function EducationList({
  data,
  sort,
  type,
}: {
  data: any;
  sort?: string;
  type?: string;
}) {
  const { locale } = useParams() as { locale: string };

  return (
    <div className="w-full md:w-4/6 lg:w-3/4">
      <SortList sort={sort} total={data?.length} type={type} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((education: any) => (
          <Card
            key={education?._id}
            btnText="See More"
            description={
              locale === "en"
                ? education?.enDescription
                : locale === "pe"
                  ? education?.peDescription
                  : education?.ruDescription
            }
            imageUrl={
              locale === "en"
                ? education?.enPictures.length > 0
                  ? education?.enPictures[0]
                  : ""
                : locale === "pe"
                  ? education?.pePictures.length > 0
                    ? education?.pePictures[0]
                    : ""
                  : education?.ruPictures.length > 0
                    ? education?.ruPictures[0]
                    : ""
            }
            name={
              locale === "en"
                ? education?.enTitle
                : locale === "pe"
                  ? education?.peTitle
                  : education?.ruTitle
            }
            route={`education/${education?._id}`}
          />
        ))}
      </div>
      <div className="mt-10 w-full justify-center items-center flex">
        <Pagination
          color="primary"
          initialPage={1}
          total={10}
          variant="faded"
        />
      </div>
    </div>
  );
}

export default EducationList;
