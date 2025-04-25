import { ReactNode } from "react";

import GoUp from "@/components/common/go-up";
import Footer from "@/components/footer";

function DefaultLayout({
  children,
}: {
  footer: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <GoUp />
      <Footer />
    </>
  );
}

export default DefaultLayout;
