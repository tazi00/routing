import AppLayout from "../Layout/AppLayout";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Service from "../Pages/Service";

const AppRoutes = {
  path: "/",
  element: <AppLayout />,
  errorElement: <h1>Error in app layout</h1>,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/service",
      element: <Service />,
    },
  ],
};

export default AppRoutes;
