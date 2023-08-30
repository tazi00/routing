import NewPartner from "../../Pages/DashboardPages/Partners/NewPartner";
import SinglePartner from "../../Pages/DashboardPages/Partners/SinglePartner";
import SinglePartnerDetail from "../../Pages/DashboardPages/Partners/SinglePartnerDetail";

const PartnerRoutes = [
  {
    path: ":id",
    element: <SinglePartner />,
  },
  {
    path: ":id/detail",
    element: <SinglePartnerDetail />,
  },
  {
    path: "new",
    element: <NewPartner />,
  },
];

export default PartnerRoutes;
