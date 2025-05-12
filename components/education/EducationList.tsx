"use client";

import { Pagination } from "@heroui/pagination";
import { useParams } from "next/navigation";

import Card from "../common/card";

import SortList from "./SortList";

import handleQuery from "@/utils/handleQuery";
import { useRouter } from "@/i18n/navigation";

function EducationList({
  data,
  query,
}: {
  data: any;
  query: { end: any; start: any; sort: any; type: any; page: any };
}) {
  const { locale } = useParams() as { locale: string };

  const router = useRouter();

  return (
    <div className="w-full lg:w-8/12 xl:w-10/12 px-10 rounded-lg ">
      <SortList
        query={{
          end: query.end,
          start: query.start,
          sort: query.sort,
          type: query.type,
          page: query.page,
        }}
        total={data?.length}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((education: any) => (
          <Card
            key={education?._id}
            btnText="See More"
            admin={education?.admin?.userName}
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
      <div className="mt-10 w-full justify-center items-center flex my-10">
        <Pagination
          showControls
          showShadow
          classNames={{
            cursor: "bg-primary text-white",
          }}
          color="primary"
          initialPage={query.page ? +query.page : 1}
          total={10}
          variant="bordered"
          onChange={(value) => {
            const val = {
              route: "education",
              type: query.type,
              end: query.end,
              start: query.start,
              sort: query.sort,
              page: value.toString(),
            };

            const getRoute = handleQuery(val);

            router.push(getRoute);
          }}
        />
      </div>
    </div>
  );
}

export default EducationList;
