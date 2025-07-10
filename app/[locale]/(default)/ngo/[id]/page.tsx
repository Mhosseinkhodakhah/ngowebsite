import { Divider } from "@heroui/divider";

import { getSingleNgo } from "@/actions/ngo";
import InfoAndContacts from "@/components/ngo-page/InfoAndContacts";
import NgoActivitiesSlider from "@/components/ngo-page/NgoActivitiesSlider";
import NgoAvatar from "@/components/ngo-page/NgoAvatar";
import NgoStatusCards from "@/components/ngo-page/NgoStatusCards";
import ProjectsSlider from "@/components/ngo-page/ProjectsSlider";
import SimilarNgosSlider from "@/components/ngo-page/SimilarNgosSlider";
import OtherNgoDetail from "@/components/ngo-page/otherNgoDetail";

async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const data = await getSingleNgo(id);

  const { ngo, similarNgo } = data?.data;

  return (
    <section className="my-20 flex flex-col justify-center items-center">
      <NgoAvatar data={ngo} />
      <Divider className="max-w-screen-lg mx-auto my-4" />
      {ngo?.locationPermition && <NgoStatusCards data={ngo} />}
      <OtherNgoDetail data={ngo} />
      {ngo?.callPermition && <InfoAndContacts data={ngo} />}
      {ngo?.publishImages.length > 0 && <NgoActivitiesSlider data={ngo} />}
      <ProjectsSlider data={ngo} />
      <SimilarNgosSlider data={similarNgo} />
    </section>
  );
}

export default Page;
