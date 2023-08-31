import React from "react";
import { RouterProvider } from "react-router-dom";

import Router from "./Routes";

function App() {
  // console.log(store);

  return <RouterProvider router={Router} />;
}

export default App;
