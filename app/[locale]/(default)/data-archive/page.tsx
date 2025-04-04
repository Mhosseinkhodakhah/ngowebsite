import Image from "next/image";

import Card from "@/components/common/card";
import Title from "@/components/common/title";
import { dataArchive } from "@/actions/data-archive";
import SearchInput from "@/components/data-archive/SearchInput";
import Empty from "@/public/images/empty.webp";
import PaginationArchive from "@/components/data-archive/PaginationArchive";

async function Page({ searchParams }: { searchParams: any }) {
  const { search, page } = await searchParams;

  const { data }: any = await dataArchive(page, search);

  console.log(data);

  return (
    <section className="flex flex-col justify-center items-center">
      <Title page="projects" titleText="Digital Archive" />

      <SearchInput page={page} />

        {data?.data.length > 0 ? (
      <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <>
            {data?.data?.map((doc: any) => (
              <Card
                key={doc?._id}
                btnText="See More"
                description={doc?.description}
                imageUrl={doc?.file.length ? doc?.file[0] : ""}
                name={doc?.title}
                ngo={doc?.ngo?.name}
                route={`/data-archive/${doc?._id}`}
                status={doc?.type[0]}
              />
            ))}
          </>
            </div>
        ) : (
          <div className="w-full flex justify-center items-center">
            <Image
              alt="Empty"
              className="w-[200px] h-[200px] object-contain"
              height={100}
              src={Empty}
              width={100}
            />
          </div>
        )}

      <PaginationArchive page={page} search={search} />
    </section>
  );
}

export default Page;
