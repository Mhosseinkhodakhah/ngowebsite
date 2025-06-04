import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { FormikErrors, FormikProps } from "formik";
import { useTranslations } from "next-intl";

function ActivityAgeRange({ formik }: { formik: FormikProps<any> }) {
  const t = useTranslations("ngo-registration");

  const handleSetAgeRange = (value: string[]) => {
    const lastValue = value[value.length - 1];
    console.log('vvvvv' , value)

    
    // if (value.includes('all'))

    // if(!value.includes('all') &&JSON.stringify(value) == JSON.stringify(['youth', 'under 18' ,'adults', 'elderly'])){
    //   value = ['youth', 'under 18', 'all' ,'adults', 'elderly']
    // }
    
    if(lastValue == 'all'){
      value = ['youth', 'under 18', 'all' ,'adults', 'elderly']
    }
    if (lastValue != 'all' && value.includes('all')){
      value.splice(value.indexOf('all') , 1)
    }

    if (value.length) {
      formik.setFieldValue("group", value);
    } else {
      formik.setFieldValue("group", []);
    }
  }

  return (
    <CheckboxGroup
      isRequired
      className="px-4 md:px-0 my-10"
      defaultValue={formik.values.group}
      errorMessage={
        formik.errors.group &&
        t(formik.errors.group as unknown as FormikErrors<any>)
      }
      label={t(
        "What age groups does your organization mainly work with? (Select all relevant options)",
      )}
      {...formik.getFieldProps("group")}
      onChange={handleSetAgeRange}
    >
      <Checkbox className="my-1" value="under 18">
        {t("Children (under 18 years old)")}
      </Checkbox>
      <Checkbox className="my-1" value="youth">
        {t("Youth (18-35 years)")}
      </Checkbox>
      <Checkbox className="my-1" value="adults">
        {t("Adults (36-60 years old)")}
      </Checkbox>
      <Checkbox className="my-1" value="elderly">
        {t("Elderly (over 60 years old)")}
      </Checkbox>
      <Checkbox className="my-1" value="all">
        {t("All age groups")}
      </Checkbox>
    </CheckboxGroup>
  );
}

export default ActivityAgeRange;
