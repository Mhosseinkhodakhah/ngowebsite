import { ReactNode } from "react";

import GoUp from "@/components/common/go-up";

function DefaultLayout({
  children,
  footer,
}: {
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <>
      {children}
      <GoUp />
      {footer}
    </>
  );
}

export default DefaultLayout;
