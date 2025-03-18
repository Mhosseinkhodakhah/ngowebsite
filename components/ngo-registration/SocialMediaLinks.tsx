import { useTranslations } from "next-intl";
import { FormikProps } from "formik";

import CInput from "./CInput";

function SocialMediaLinks({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-8 px-4 md:px-0">{t("Social network link")}</h5>
      <div className="flex flex-col md:flex-row w-full justify-between gap-4 px-4 md:px-0">
        <CInput
          formik={formik}
          isRequired={false}
          label="Instagram"
          name="instagram"
        />
        <CInput
          formik={formik}
          isRequired={false}
          label="Telegram"
          name="telegram"
        />
        <CInput
          formik={formik}
          isRequired={false}
          label="Linkedin"
          name="linkedin"
        />
      </div>
    </>
  );
}

export default SocialMediaLinks;
