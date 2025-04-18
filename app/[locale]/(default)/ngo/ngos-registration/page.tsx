import Title from "@/components/common/title";
import RegistrationForm from "@/components/ngo-registration/RegistrationForm";

function Page() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Title
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        page="ngo-registration"
        titleText="NGO Registration"
      />
      <RegistrationForm />
    </section>
  );
}

export default Page;
