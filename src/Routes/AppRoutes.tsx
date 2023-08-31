import AppLayout from "../Layout/AppLayout";
import About, { loader as aboutData } from "../Pages/About";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service";
import Videos from "../Pages/Videos/Videos";
import VideosDetails from "../Pages/Videos/VideosDetails";
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
      loader: aboutData,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/videos",
      children: [
        {
          index: true,
          element: <Videos />,
        },
        {
          path: ":id",
          element: <VideosDetails />,
        },
      ],
    },
  ],
};

export default AppRoutes;
