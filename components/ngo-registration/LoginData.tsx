import { FormikProps } from "formik";
import { useTranslations } from "use-intl";

import CInput from "./CInput";

function LoginData({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  return (
    <>
      <h5 className="px-4 md:px-0 my-10">{t("Login Information")}</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
        <CInput isRequired formik={formik} label="Username" name="username" />
        <CInput
          isRequired
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <CInput
          isRequired
          formik={formik}
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />
      </div>
    </>
  );
}

export default LoginData;
