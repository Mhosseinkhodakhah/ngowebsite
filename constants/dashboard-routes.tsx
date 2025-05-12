import { Icon } from "@iconify/react";

const DashboardRoutes = [
  {
    name: "Dashboard",
    routes: "/dashboard",
    icon: <Icon height="24" icon="mynaui:grid-solid" width="24" />,
  },
  {
    name: "Projects",
    routes: "/dashboard/projects",
    icon: <Icon height="24" icon="eos-icons:project" width="24" />,
  },
  {
    name: "Documents",
    routes: "/dashboard/documents",
    icon: <Icon height="24" icon="solar:document-bold" width="24" />,
  },
];

export default DashboardRoutes;
