import InfoAndContacts from "@/components/ngo-page/InfoAndContacts";
import NgoActivitiesSlider from "@/components/ngo-page/NgoActivitiesSlider";
import NgoAvatar from "@/components/ngo-page/NgoAvatar";
import NgoStatusCards from "@/components/ngo-page/NgoStatusCards";
import SimilarNgosSlider from "@/components/ngo-page/SimilarNgosSlider";

function Page() {
  return (
    <section className="my-20 flex flex-col justify-center items-center">
      <NgoAvatar />
      <NgoStatusCards />
      <NgoActivitiesSlider />
      <InfoAndContacts />
      <SimilarNgosSlider />
    </section>
  );
}

export default Page;
