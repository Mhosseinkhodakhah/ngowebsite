import { ReactNode } from "react";

import SideBar from "@/components/dashboard/Sidebar";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full h-dvh max-h-screen md:fixed md:top-0 md:pt-20">
      <SideBar />
      {children}
    </div>
  );
}

export default DashboardLayout;
