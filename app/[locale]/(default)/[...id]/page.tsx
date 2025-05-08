import { getAboutUs } from "@/actions/about-us";
import TemplateOne from "@/components/template/template-one";

async function DynamicPage() {
  const data = await getAboutUs();

  return <>{data?.data?.template === 1 && <TemplateOne data={data} />}</>;
}

export default DynamicPage;
