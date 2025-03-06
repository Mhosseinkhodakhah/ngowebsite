import UploadSection from "./UploadSection";
import GlobalInfo from "./GlobalInfo";
import ActivityField from "./ActivityField";
import AreaActivity from "./AreaActivity";
import ActivityCommunity from "./ActivityCommunity";
import ActivitySpeceficField from "./ActivitySpeceficField";
import ActivityAreaExpertise from "./ActivityAreaExpertise";
import ActivityPopulationConcentration from "./ActivityPopulationConcentration";
import ActivityAgeRange from "./ActivityAgeRange";
import SocialMediaLinks from "./SocialMediaLinks";
import DescriptionField from "./DescriptionField";
import CooperateCheck from "./CooperateCheck";
import ActivityLicense from "./ActivityLicense";
import NgoDocuments from "./NgoDocuments";
import NgoPublishDocument from "./NgoPublishDocument";
import ConditionAndConfirm from "./ConditionAndConfirm";
import FormButtons from "./FormButtons";
import ContactFields from "./ContactFields";

function RegistrationForm() {
  return (
    <form className="w-full md:w-2/3 mt-20">
      <GlobalInfo />
      <ActivityField />
      <ContactFields />
      <AreaActivity />
      <ActivityCommunity />
      <ActivitySpeceficField />
      <ActivityAreaExpertise />
      <ActivityPopulationConcentration />
      <ActivityAgeRange />
      <DescriptionField />
      <SocialMediaLinks />
      <CooperateCheck />
      <ActivityLicense />
      <NgoDocuments />
      <UploadSection />
      <NgoPublishDocument />
      <ConditionAndConfirm />
      <FormButtons />
    </form>
  );
}

export default RegistrationForm;
