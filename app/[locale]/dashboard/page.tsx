import { redirect } from "@/i18n/navigation";

async function Page({ params }: { params: any }) {
  const { locale } = await params;

  redirect({ href: "/dashboard/projects", locale: locale });

  return <></>;
}

export default Page;
