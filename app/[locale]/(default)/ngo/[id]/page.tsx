import { Divider } from "@heroui/divider";

import { getSingleNgo } from "@/actions/ngo";
import InfoAndContacts from "@/components/ngo-page/InfoAndContacts";
import NgoActivitiesSlider from "@/components/ngo-page/NgoActivitiesSlider";
import NgoAvatar from "@/components/ngo-page/NgoAvatar";
import NgoStatusCards from "@/components/ngo-page/NgoStatusCards";
import ProjectsSlider from "@/components/ngo-page/ProjectsSlider";
import SimilarNgosSlider from "@/components/ngo-page/SimilarNgosSlider";

async function Page({ params }: { params: { id: string } }) {
  const id = await params.id;

  const data = await getSingleNgo(id);

  const { ngo, similarNgo } = data?.data;

  return (
    <section className="my-20 flex flex-col justify-center items-center">
      <NgoAvatar data={ngo} />
      <Divider className="max-w-screen-lg mx-auto my-4" />
      <NgoStatusCards data={ngo} />
      <InfoAndContacts data={ngo} />
      <NgoActivitiesSlider data={ngo} />
      <ProjectsSlider data={ngo} />
      <SimilarNgosSlider data={similarNgo} />
    </section>
  );
}

export default Page;
