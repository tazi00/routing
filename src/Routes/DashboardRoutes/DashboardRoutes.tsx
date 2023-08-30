import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard";
import NewPartner from "../../Pages/DashboardPages/Partners/NewPartner";
import Partners from "../../Pages/DashboardPages/Partners/Partners";
import SinglePartner from "../../Pages/DashboardPages/Partners/SinglePartner";
import Settings from "../../Pages/DashboardPages/Settings";
import Sponsers from "../../Pages/DashboardPages/Sponsers";
import Stats from "../../Pages/DashboardPages/Stats";
import PartnerRoutes from "./PartnerRoutes";

const DashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  errorElement: <h1>Error in Dashboard layout</h1>,
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
      path: "partners",
      element: <Partners />,
      children: PartnerRoutes,
    },
    {
      path: "sponsers",
      element: <Sponsers />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "stats",
      element: <Stats />,
    },
  ],
};
export default DashboardRoutes;
