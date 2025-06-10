/* eslint-disable jsx-a11y/media-has-caption */
import { Divider } from "@heroui/divider";

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
            ? data?.events?.enDescription
            : locale === "pe"
              ? data?.events?.peDescription
              : data?.events?.ruDescription
        }
        titleText={
          locale === "en"
            ? data?.events?.enTitle
            : locale === "pe"
              ? data?.events?.peTitle
              : data?.events?.ruTitle
        }
      />

      <div className="max-w-screen-lg w-full flex flex-col mt-20">
        <PictureSlider data={data} />
        <Divider className="my-5" data-aos="fade-up" data-aos-duration="1000" />

        {/* <h2
          className="text-xl font-bold border-b-5 border-primary mt-20 w-max mx-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {locale === "en"
            ? "Event Content"
            : locale === "pe"
              ? "محتوای رویداد"
              : "Содержание мероприятия"}
        </h2> */}

        <div
          dangerouslySetInnerHTML={{
            __html:
              locale === "en"
                ? data?.events?.enEventsBody
                : locale === "pe"
                  ? data?.events?.peEventsBody
                  : data?.events?.ruEventsBody,
          }}
          className="p-4 text-justify leading-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        />

        {/* <pre className="p-4" data-aos="fade-up" data-aos-duration="1000">
          {locale === "en"
            ? data?.events?.enEventsBody
            : locale === "pe"
              ? data?.events?.peEventsBody
              : data?.events?.ruEventsBody}
        </pre> */}
      </div>
      <Title page="events" titleText="Similar Events" />

      {data?.similar?.length > 0 && (
        <div className="flex flex-col w-full max-w-screen-xl px-12 mt-20">
          <SimilarSlider data={data} />
        </div>
      )}
    </section>
  );
}

export default Page;
