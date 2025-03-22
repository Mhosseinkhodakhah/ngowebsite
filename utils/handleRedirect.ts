import { redirect } from "@/i18n/navigation";

function handleRedirect() {
  //   const langItem = localStorage.getItem("i18nextLng");
  //   const parseLang = langItem ? JSON.parse(langItem) : null;

  redirect({ href: "/login", locale: "en" });
}

export default handleRedirect;
