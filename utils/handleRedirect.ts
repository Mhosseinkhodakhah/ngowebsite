// "use server";

import { redirect } from "next/navigation";

export function handleRedirect() {
  redirect("/login");

  return;
}
