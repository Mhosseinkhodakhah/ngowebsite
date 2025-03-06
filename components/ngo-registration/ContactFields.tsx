import AutoCompleteContryCode from "./AutoCompleteCountryCode";
import CInput from "./CInput";
import AutoCompleteCountry from "./SelectCountry";

function ContactFields() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 w-full mt-10 px-4 md:px-0">
        <AutoCompleteCountry />
        <CInput isRequired label="City" name="city" />
      </div>
      <div className="mt-10 w-full px-4 md:px-0">
        <CInput
          isRequired
          className="w-full flex-1"
          label="Address"
          name="address"
        />
      </div>
      <div className="mt-10 w-full px-4 md:px-0 flex flex-col md:flex-row gap-10">
        <CInput
          isRequired
          className="w-full flex-1"
          label="Postal / Zip Code"
          name="address"
        />
        <div className="flex gap-2 flex-1 w-full">
          <CInput
            isRequired
            className="w-full flex-1"
            label="Phone"
            name="phone"
          />
          <AutoCompleteContryCode />
        </div>
      </div>
      <div className="mt-10 w-full px-4 md:px-0 flex flex-col md:flex-row gap-10">
        <CInput
          isRequired
          className="w-full flex-1"
          label="Official organization email"
          name="email"
          type="email"
        />
        <CInput
          className="w-full flex-1"
          isRequired={false}
          label="Website"
          name="website"
        />
      </div>
    </>
  );
}

export default ContactFields;
