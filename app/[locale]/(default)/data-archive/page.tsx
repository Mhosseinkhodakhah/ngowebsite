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

  return (
    <section className="flex flex-col justify-center items-center">
      <Title page="projects" titleText="Digital Archive" />

      {data?.data.length > 0 ? (
        <>
          <SearchInput page={page} />

          <div
            className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 p-5 rounded-2xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
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
          <PaginationArchive page={page} search={search} />
        </>
      ) : (
        <div
          className="w-full flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            alt="Empty"
            className="w-[200px] h-[200px] object-contain"
            height={100}
            src={Empty}
            width={100}
          />
        </div>
      )}
    </section>
  );
}

export default Page;
