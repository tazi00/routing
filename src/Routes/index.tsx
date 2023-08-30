import { createBrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import DashboardRoutes from "./DashboardRoutes/DashboardRoutes";
const router = createBrowserRouter([AppRoutes, DashboardRoutes]);
export default router;
