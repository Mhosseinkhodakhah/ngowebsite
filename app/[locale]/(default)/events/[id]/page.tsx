/* eslint-disable jsx-a11y/media-has-caption */

import Title from "@/components/common/title";
import { getSingleEvent } from "@/actions/events";
import PictureSlider from "@/components/events/PictureSlider";
import SimilarSlider from "@/components/events/SimilarSlider";

async function Page({ params }: { params: any }) {
  const { locale, id } = await params;

  const { data } = await getSingleEvent(id);

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description={
          locale === "en"
            ? data?.events.enDescription
            : locale === "pe"
              ? data?.events.enDescription
              : data?.events.ruDescription
        }
        titleText={
          locale === "en"
            ? data?.events.enTitle
            : locale === "pe"
              ? data?.events.enTitle
              : data?.events.ruTitle
        }
      />

      <div className="max-w-screen-lg w-full flex flex-col mt-20">
        <PictureSlider data={data} />

        <p className="p-4 text-center">
          {locale === "en"
            ? data?.events.enEventsBody
            : locale === "pe"
              ? data?.events.enEventsBody
              : data?.events.ruEventsBody}
        </p>
      </div>
      <Title page="events" titleText="Similar Events" />

      {data?.similar.length > 0 && (
        <div className="flex flex-col w-full lg:w-2/3 px-12 mt-20">
          <SimilarSlider data={data} />
        </div>
      )}
    </section>
  );
}

export default Page;
