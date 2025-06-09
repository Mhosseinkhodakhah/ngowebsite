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

  console.log("ddd", data);

  const cardImg = (files: string[]): string => {
    let findImg = "";

    files.forEach((f) => {
      if (
        f.slice(f.length - 3) === "png" ||
        f.slice(f.length - 3) === "jpg" ||
        f.slice(f.length - 3) === "jpeg"
      ) {
        findImg = f;
      }
    });

    return findImg;
  };

  return (
    <section className="flex flex-col justify-center items-center overflow-y-hidden">
      <Title page="projects" titleText="Digital Archive" />

      {data?.data?.documents.length > 0 ? (
        <>
          <SearchInput page={page} />

          <div
            className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 p-5 rounded-2xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <>
              {data?.data?.documents?.map((doc: any) => (
                <Card
                  key={doc?._id}
                  btnText="See More"
                  description={doc?.description}
                  imageUrl={doc?.file.length ? cardImg(doc?.file) : ""}
                  name={doc?.title}
                  ngo={doc?.ngo}
                  route={`/data-archive/${doc?._id}`}
                  status={doc?.type}
                />
              ))}
            </>
          </div>
          {Math.ceil(data?.data?.all / 10) > 1 && (
            <PaginationArchive
              all={data?.data?.all}
              page={page}
              search={search}
            />
          )}
        </>
      ) : (
        <div
          className="w-full flex flex-col justify-center items-center py-20"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            alt="Empty"
            className="w-[200px] h-[200px] object-contain"
            height={500}
            src={Empty}
            width={500}
          />
        </div>
      )}
    </section>
  );
}

export default Page;
