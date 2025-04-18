import { getDescriptionPage } from "@/actions/educations";
import { getEvents } from "@/actions/events";
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

      <div className="flex gap-4 w-full m-4 px-4 mt-20">
        <FilterEvents query={{ end, sort, start, type, page }} />
        <EventsList
          data={data?.data}
          query={{ end, sort, start, type, page }}
        />
      </div>
    </section>
  );
}

export default Page;
