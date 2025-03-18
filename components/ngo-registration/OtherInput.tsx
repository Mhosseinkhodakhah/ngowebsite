import { Input } from "@heroui/input";
import { FormikProps } from "formik";
import { useTranslations } from "use-intl";

interface Props {
  formik: FormikProps<any>;
  name: string;
  refName: string;
}

function OtherInput({ formik, name, refName }: Props) {
  const t = useTranslations("ngo-registration");

  return (
    <Input
      disabled={formik.values[refName].includes("other") ? false : true}
      errorMessage={() => {
        if (formik.errors[name]) {
          return t(formik.errors[name]);
        }
      }}
      isInvalid={
        formik.values[refName].includes("other") && formik.errors[name]
          ? true
          : false
      }
      isRequired={formik.values[refName].includes("other") ? true : false}
      label={t("Please specify")}
      {...formik.getFieldProps(name)}
    />
  );
}

export default OtherInput;
