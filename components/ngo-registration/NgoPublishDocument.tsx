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
      formik.setFieldValue("publish", [lastValue]);
    } else {
      formik.setFieldValue("publish", []);
    }
  };

  return (
    <>
      <CheckboxGroup
        isRequired
        className="px-4 md:px-0 my-10"
        defaultValue={formik.values.publish}
        errorMessage={
          formik.errors.publish &&
          t(formik.errors.publish as unknown as FormikErrors<any>)
        }
        label={t("Is it allowed to publish information publicly?")}
        {...formik.getFieldProps("publish")}
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
          disabled={formik.values.publish.includes("limited") ? false : true}
          errorMessage={() => {
            if (formik.errors.publish) {
              return t(formik.errors.publish);
            }
          }}
          isInvalid={
            formik.values.publish.includes("limited") &&
            formik.errors.publishValue
              ? true
              : false
          }
          isRequired={formik.values.publish.includes("limited") ? true : false}
          label={t("Information authorized for publication")}
          {...formik.getFieldProps("publishValue")}
        />
      </div>
    </>
  );
}

export default NgoPublishDocument;
