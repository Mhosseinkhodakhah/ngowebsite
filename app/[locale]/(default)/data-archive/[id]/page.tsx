import { getSingleDataArchive } from "@/actions/data-archive";
import ArchiveSlider from "@/components/data-archive/ArchiveSlider";
import SeeNgo from "@/components/data-archive/SeeNgo";

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const { data }: any = await getSingleDataArchive(id);

  const { title, description, type, file, _id } = data?.data;

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20">
        {title}
      </h1>

      {type[0] === "image" && <ArchiveSlider data={file} />}

      <div className="my-4 w-full max-w-screen-md">
        <SeeNgo id={_id} />
      </div>

      <div className="mt-20 flex flex-col justify-center items-center max-w-screen-md">
        <p className="px-4 font-light">{description}</p>
      </div>
    </section>
  );
}

export default Page;
