import Image from "next/image";
import { useParams } from "next/navigation";

import EmailIcon from "../common/icons/email";
import Location from "../common/icons/location";
import PhoneIcon from "../common/icons/phone";
import FaxIcon from "../common/icons/fax";
import WebIcon from "../common/icons/website";

function LeftSection({ data }: { data: any }) {
  const { locale } = useParams();

  return (
    <section className="text-gray">
      <Image
        alt="Logo"
        className="text-3xl p-4"
        height={200}
        src={data?.logo[0]}
        width={200}
      />

      <p className="p-4 font-light">
        {locale === "pe"
          ? data?.peDescription
          : locale === "en"
            ? data?.enDescription
            : data?.ruDescription}
      </p>
      <div className="flex px-4 py-1 gap-2 items-center">
        <Location className="text-gray" />
        <span className="font-light text-sm">
          {locale === "pe"
            ? data?.peAddress
            : locale === "en"
              ? data?.enAddress
              : data?.ruAddress}
        </span>
      </div>
      <div className="flex px-4 py-1 gap-2 items-center">
        <PhoneIcon className="text-gray" />
        <span className="font-light text-sm">{data?.phone}</span>
      </div>
      <div className="flex px-4 py-1 gap-2 items-center">
        <EmailIcon className="text-gray" />
        <span className="font-light text-sm">{data?.gmail}</span>
      </div>
      <div className="flex px-4 py-1 gap-2 items-center">
        <FaxIcon className="text-gray" />
        <span className="font-light text-sm">+982166944866</span>
      </div>
      <div className="flex px-4 py-1 gap-2 items-center">
        <WebIcon className="text-gray" />
        <span className="font-light text-sm">http://www.inio.ac.ir</span>
      </div>
    </section>
  );
}

export default LeftSection;
