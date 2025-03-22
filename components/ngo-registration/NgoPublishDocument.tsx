import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";
import { FormikProps, FormikErrors } from "formik";

function NgoPublishDocument({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetPublishDocument = (value: string[]) => {
    const lastValue = value[value.length - 1];

    if (value.length) {
      if (lastValue === "no" || lastValue === "yes") {
        formik.setFieldValue("publishValue", "");
      }
      formik.setFieldValue("publishSelect", [lastValue]);
    } else {
      formik.setFieldValue("publishSelect", []);
    }
  };

  return (
    <>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={formik.values.publishSelect}
        errorMessage={
          formik.errors.publishSelect &&
          t(formik.errors.publishSelect as unknown as FormikErrors<any>)
        }
        label={t("Is it allowed to publish information publicly?")}
        {...formik.getFieldProps("publishSelect")}
        onChange={handleSetPublishDocument}
      >
        <Checkbox className="my-1" value="yes">
          {t("YES")}
        </Checkbox>
        <Checkbox className="my-1" value="no">
          {t("NO")}
        </Checkbox>
        <Checkbox className="my-1" value="limited">
          {t("Limited")}
        </Checkbox>
      </CheckboxGroup>
      <div className="flex items-center gap-4 flex-1 mx-4 md:mx-0 mt-2">
        <Input
          disabled={
            formik.values.publishSelect.includes("limited") ? false : true
          }
          errorMessage={() => {
            if (formik.errors.publishSelect) {
              return t(formik.errors.publishSelect);
            }
          }}
          isInvalid={
            formik.values.publishSelect.includes("limited") &&
            formik.errors.publishValue
              ? true
              : false
          }
          isRequired={
            formik.values.publishSelect.includes("limited") ? true : false
          }
          label={t("Information authorized for publication")}
          {...formik.getFieldProps("publishValue")}
        />
      </div>
    </>
  );
}

export default NgoPublishDocument;
