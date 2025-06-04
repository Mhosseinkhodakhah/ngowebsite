import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { useTranslations } from "next-intl";
import { FormikErrors, FormikProps } from "formik";
import { Input } from "@heroui/input";

/**
 * برای گرفتن اجازه اشتراک اطلاعات تماس و جغرافیایی از سمن
 * @param param0
 * @returns
 *
 */

// import RegisterDatePicker from "./RegisterDatePicker";

function IsPermitedForPublish({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetActivityLicense = (value: string[]) => {
    const lastValue = value[value.length - 1];
    console.log(value);
    if (value.length) {
      if (value.includes("callInfo")) {
        formik.setFieldValue("locationPermition", true); // set location permision true that means the ngo permits for sharing their location data
      }
      if (value.includes("locations")) {
        formik.setFieldValue("callPermition", true); // set call permition
      }
    }
  };

  return (
    <>
      <h5 className="py-4 px-4 md:px-0">{t("Share additional information")}</h5>

      <CheckboxGroup
        className=" md:px-0 my-10"
        label={t("Which sections Do You Want Share With Other Users")}
        onChange={handleSetActivityLicense}
      >
        <Checkbox className="my-1" value="callInfo">
          {t("callInfoPermition")}
        </Checkbox>
        <Checkbox className="my-1" value="locations">
          {t("locationPermition")}
        </Checkbox>
      </CheckboxGroup>
    </>
  );
}

export default IsPermitedForPublish;
