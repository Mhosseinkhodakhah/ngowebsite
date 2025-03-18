import { useTranslations } from "next-intl";
import { FormikProps } from "formik";

import CInput from "./CInput";
import NumberInput from "./NumberInput";

function GlobalInfo({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="py-4 px-4 md:px-0">
        {t("General information of the organization")}
      </h5>
      <div className="flex flex-col md:flex-row w-full justify-between gap-4 px-4 md:px-0">
        <CInput
          isRequired
          formik={formik}
          label="Name of the NGO"
          name="name"
        />
        <CInput
          formik={formik}
          isRequired={false}
          label="National ID"
          name="nationalId"
        />
        <NumberInput
          formik={formik}
          label="Year of establishment"
          name="establishmentYear"
        />
      </div>
    </>
  );
}

export default GlobalInfo;
