/* eslint-disable jsx-a11y/media-has-caption */
import Image from "next/image";

import Title from "@/components/common/title";
import Slider from "@/components/common/slider";
import { getSingleEducation } from "@/actions/educations";
import PictureSlider from "@/components/education/PictureSlider";
import SimilarSlider from "@/components/education/SimilarSlider";

async function Page({ params }: { params: any }) {
  const { locale, id } = await params;
  const { data } = await getSingleEducation(id);

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description={
          locale === "en"
            ? data?.educations.enDescription
            : locale === "pe"
              ? data?.educations.peDescription
              : data?.educations.ruDescription
        }
        titleText={
          locale === "en"
            ? data?.educations.enTitle
            : locale === "pe"
              ? data?.educations.peTitle
              : data?.educations.ruTitle
        }
      />
      <div className="max-w-screen-md w-full  flex flex-col mt-20">
        <PictureSlider data={data} />

        <p className="p-4">
          {locale === "en"
            ? data?.educations.enEducationBody
            : locale === "pe"
              ? data?.educations.peEducationBody
              : data?.educations.ruEducationBody}
        </p>
      </div>
      <Title page="education" titleText="Similar Education" />
      {data?.similar.length > 0 && (
        <div className="flex flex-col w-full max-w-screen-xl px-12 mt-20">
          <SimilarSlider data={data} />
        </div>
      )}
    </section>
  );
}

export default Page;
