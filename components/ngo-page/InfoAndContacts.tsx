import { useTranslations } from "next-intl";
import EmailIcon from "../common/icons/email";
import GroupIcon from "../common/icons/goup-icon";
import WebIcon from "../common/icons/web-icon";

function InfoAndContacts() {
  const t = useTranslations("NGOPage");

  return (
    <section className="my-20 flex flex-col justify-center items-center mx-4 md:mx-0 md:w-2/3 text-gray bg-gradient-to-br from-secondary to-primary rounded-md gap-8">
      <div className="w-full text-center py-4">
        <h2 className="font-bold text-xl">{t("INFO & CONTACTS")}</h2>
      </div>
      <div className="py-4 flex flex-col md:flex-row gap-10 md:gap-0 justify-around w-full">
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <WebIcon />
            <span>{t("Website")}</span>
          </div>
          <p className="font-light">www.example.com</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <EmailIcon />
            <span>{t("Mail")}</span>
          </div>
          <p className="font-light">@example.com</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <GroupIcon />
            <span>{t("Social")}</span>
          </div>
          <p className="font-light">Facebook</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <h4 className="text-center text-lg">{t("Address")}</h4>
        <p className="text-center font-light px-4 md:px-0">
          Abaim, Colonel Maingard Steet, Beau Bassin, Mauritius 71503, Mauritius
        </p>
      </div>
    </section>
  );
}

export default InfoAndContacts;
