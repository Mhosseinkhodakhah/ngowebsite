import { getFooter } from "@/actions/home";
import FooterComponent from "@/components/footer";

async function Footer() {
  const footer = await getFooter();

  return <FooterComponent footer={footer?.data} />;
}

export default Footer;
