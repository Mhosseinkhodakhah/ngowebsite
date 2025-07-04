import { getDescriptionPage } from "@/actions/educations";
import { getEvents } from "@/actions/events";
import Empty from "@/components/common/empty";
import SearchInput from "@/components/common/search-input";
import Title from "@/components/common/title";
import EventsList from "@/components/events/EventsList";
import FilterEvents from "@/components/events/FilterEvents";

async function Page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const { type, sort, start, end, page } = await searchParams;
  const { locale } = await params;

  const data = await getEvents(type, sort, start, end, page);

  const descriptions = await getDescriptionPage("events");

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description={
          locale === "en"
            ? descriptions?.data?.enDescription
            : locale === "pe"
              ? descriptions?.data?.peDescription
              : descriptions?.data?.ruDescription
        }
        page="navbar"
        titleText="Events"
      />

      <SearchInput page={page} route="events" />

      {data?.data ? (
        <div className="flex gap-4 w-full m-4 px-2 lg:px-10 mt-20">
          <FilterEvents query={{ end, sort, start, type, page }} />
          <EventsList
            all={data?.data?.all}
            data={data?.data?.event}
            query={{ end, sort, start, type, page }}
          />
        </div>
      ) : (
        <Empty description="The list is empty" />
      )}
    </section>
  );
}

export default Page;
