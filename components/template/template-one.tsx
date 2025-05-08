"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

function TemplateOne({ data }: { data: any }) {
  const { locale } = useParams();

  return (
    <section>
      <div>
        <Image src={data.image} alt={data?.enTitle} />
      </div>
      <div>
        {locale === "pe"
          ? data?.peTitle
          : locale === "en"
            ? data?.enTitle
            : data?.ruTitle}
      </div>
      <p>
        {locale === "pe"
          ? data?.peDescription
          : locale === "en"
            ? data?.enDescription
            : data?.ruDescription}
      </p>
      <p>
        {locale === "pe"
          ? data?.peContent
          : locale === "en"
            ? data?.enContent
            : data?.ruContent}
      </p>
    </section>
  );
}

export default TemplateOne;
