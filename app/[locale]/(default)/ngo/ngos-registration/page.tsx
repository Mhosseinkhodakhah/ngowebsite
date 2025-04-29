import { getDescriptionPage } from "@/actions/educations";
import Title from "@/components/common/title";
import RegistrationForm from "@/components/ngo-registration/RegistrationForm";

async function Page({ params }: { params: any }) {
  const descriptions = await getDescriptionPage("ngoRegister");
  const { locale } = await params;

  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description={
          locale === "en"
            ? descriptions?.data?.enDescription
            : locale === "pe"
              ? descriptions?.data?.peDescription
              : descriptions?.data?.ruDescription
        }
        page="ngo-registration"
        titleText="NGO Registration"
      />
      <RegistrationForm />
    </section>
  );
}

export default Page;
