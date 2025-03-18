import { FormikProps } from "formik";

import AutoCompleteContryCode from "./AutoCompleteCountryCode";
import CInput from "./CInput";
import AutoCompleteCountry from "./SelectCountry";
import NumberInput from "./NumberInput";

function ContactFields({ formik }: { formik: FormikProps<any> }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 w-full mt-10 px-4 md:px-0">
        <AutoCompleteCountry formik={formik} />
        <CInput isRequired formik={formik} label="City" name="city" />
      </div>
      <div className="mt-10 w-full px-4 md:px-0">
        <CInput
          isRequired
          className="w-full flex-1"
          formik={formik}
          label="Address"
          name="address"
        />
      </div>
      <div className="mt-10 w-full px-4 md:px-0 flex flex-col md:flex-row gap-10">
        <CInput
          isRequired
          className="w-full flex-1"
          formik={formik}
          label="Postal / Zip Code"
          name="postal"
        />
        <div className="flex gap-2 flex-1 w-full">
          <NumberInput
            className="w-full flex-1"
            formik={formik}
            label="Phone"
            name="phone"
          />
          <AutoCompleteContryCode formik={formik} />
        </div>
      </div>
      <div className="mt-10 w-full px-4 md:px-0 flex flex-col md:flex-row gap-10">
        <CInput
          isRequired
          className="w-full flex-1"
          formik={formik}
          label="Official organization email"
          name="email"
          type="email"
        />
        <CInput
          className="w-full flex-1"
          formik={formik}
          isRequired={false}
          label="Website"
          name="website"
        />
      </div>
    </>
  );
}

export default ContactFields;
