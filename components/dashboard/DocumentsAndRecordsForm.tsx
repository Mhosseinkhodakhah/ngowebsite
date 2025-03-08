import { useTranslations } from "next-intl";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Textarea } from "@heroui/input";

import CInput from "../common/cinput";

import UploadDocumentsSection from "./UploadDocumentsSection";
import FormButtons from "./FormButtons";
function DocumentsAndRecordsForm() {
  const t = useTranslations("dashboard");

  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0">
        <CInput isRequired label="NGO Name" name="ngoName" page="dashboard" />
        <CInput isRequired label="Email" name="email" page="dashboard" />
        <CInput
          isRequired={false}
          label="Interface Name"
          name="interfaceName"
          page="dashboard"
        />
        <CInput
          isRequired={false}
          label="Phone"
          name="phone"
          page="dashboard"
        />
      </div>
      <div className="px-4 md:px-0">
        <CheckboxGroup
          isRequired
          className="px-4 md:px-0 mt-8"
          defaultValue={[]}
          label={t("Document Type")}
        >
          <Checkbox className="my-1" value="image">
            {t("Image")}
          </Checkbox>
          <Checkbox className="my-1" value="word">
            {t("Word File")}
          </Checkbox>
          <Checkbox className="my-1" value="pdf">
            {t("PDF")}
          </Checkbox>
          <Checkbox className="my-1" value="video">
            {t("Video")}
          </Checkbox>
        </CheckboxGroup>
        <CInput
          isRequired
          className="w-2/3 my-2"
          label="Title"
          name="title"
          page="dashboard"
        />
        <Textarea
          isClearable
          isRequired
          label={t("Description Doc")}
          name="description"
        />
        <UploadDocumentsSection />
        <FormButtons />
      </div>
    </form>
  );
}

export default DocumentsAndRecordsForm;
