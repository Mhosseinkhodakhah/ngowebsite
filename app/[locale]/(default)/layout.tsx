import { ReactNode } from "react";

import Footer from "@/components/footer";
import GoUp from "@/components/common/go-up";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <GoUp />
      <Footer />
    </>
  );
}

export default DefaultLayout;
