"use client";

import { Pagination } from "@heroui/pagination";
import { useParams } from "next/navigation";

import Card from "../common/card";

import SortList from "./SortList";
import handleQuery from "@/utils/handleQuery";
import { useRouter } from "@/i18n/navigation";

function EventsList({
  data,
  query,
}: {
  data: any;
  query: { end: any; start: any; sort: any; type: any; page: any };
}) {
  const { locale } = useParams() as { locale: string };

  const router = useRouter();

  return (
    <div className="w-full md:w-4/6 lg:w-3/4">
      <SortList
        query={{
          end: query.end,
          start: query.start,
          sort: query.sort,
          type: query.type,
          page: query.page,
        }}
        total={data.length}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((event: any) => (
          <Card
            key={event?._id}
            btnText="See More"
            description={
              locale === "en"
                ? event?.enDescription
                : locale === "pe"
                  ? event?.peDescription
                  : event?.ruDescription
            }
            imageUrl={
              locale === "en"
                ? event?.enPictures.length > 0
                  ? event?.enPictures[0]
                  : ""
                : locale === "pe"
                  ? event?.pePictures.length > 0
                    ? event?.pePictures[0]
                    : ""
                  : event?.ruPictures.length > 0
                    ? event?.ruPictures[0]
                    : ""
            }
            name={
              locale === "en"
                ? event?.enTitle
                : locale === "pe"
                  ? event?.peTitle
                  : event?.ruTitle
            }
            route={`events/${event?._id}`}
          />
        ))}
      </div>
      <div className="mt-10 w-full justify-center items-center flex">
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
              route: "events",
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

export default EventsList;
