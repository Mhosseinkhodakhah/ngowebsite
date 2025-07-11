import Link from "next/link";

import { getDescriptionPage } from "@/actions/educations";
import Title from "@/components/common/title";
import DashboardHead from "@/components/dashboard/DashboardHead";
import DocumentsAndRecordsForm from "@/components/dashboard/DocumentsAndRecordsForm";

async function AddDocument({ params }: { params: any }) {
  const { locale } = await params;

  const data = await getDescriptionPage("createDocument");

  return (
    <section className="flex flex-col items-center w-full md:w-3/5 lg:w-3/4 md:p-10 md:overflow-y-auto">
      <div className="px-6 w-full mt-4">
        <DashboardHead />
      </div>
      <Title
        description={
          locale === "pe"
            ? data?.data?.peDescription
            : locale === "en"
              ? data?.data?.enDescription
              : data?.data?.ruDescription
        }
        page="dashboard"
        titleText="Uploading documents and records"
      />

      <a
        download
        className="text-start text-blue-500 border-b-1"
        data-aos="fade-up"
        data-aos-duration="1000"
        href={data?.data?.pdf[0]}
      >
        {locale === "pe"
          ? "دریافت فایل راهنما"
          : locale === "en"
            ? "Get the help file"
            : "Получить файл справки"}
      </a>

      <div className="w-full md:px-10 mt-10 py-10">
        <DocumentsAndRecordsForm />
      </div>
    </section>
  );
}

export default AddDocument;
