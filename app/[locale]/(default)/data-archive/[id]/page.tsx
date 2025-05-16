import { getSingleDataArchive } from "@/actions/data-archive";
import ArchiveSlider from "@/components/data-archive/ArchiveSlider";
import DataArchiveFiles from "@/components/data-archive/DataArchiveFiles";
import SeeNgo from "@/components/data-archive/SeeNgo";

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const { data }: any = await getSingleDataArchive(id);

  const { title, description, type, file, ngo } = data?.data;

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20">
        {title}
      </h1>

      {/* {type.includes("image") && <ArchiveSlider data={file} />} */}

      <div className="mt-20 flex flex-col justify-center items-center max-w-screen-md">
        <p className="px-4 font-light">{description}</p>
      </div>
      <DataArchiveFiles data={data?.data} />
      <div className="my-4 w-full max-w-screen-md">
        <SeeNgo id={ngo?._id} />
      </div>
    </section>
  );
}

export default Page;
