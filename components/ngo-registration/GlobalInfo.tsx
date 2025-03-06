import { useTranslations } from "next-intl";

import CInput from "./CInput";

function GlobalInfo() {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-4 px-4 md:px-0">
        {t("General information of the organization")}
      </h5>
      <div className="flex flex-col md:flex-row w-full justify-between gap-4 px-4 md:px-0">
        <CInput isRequired label="Name of the NGO" name="name" />
        <CInput isRequired={false} label="National ID" name="nationalId" />
        <CInput
          isRequired
          label="Year of establishment"
          name="Year"
          type="number"
        />
      </div>
    </>
  );
}

export default GlobalInfo;
