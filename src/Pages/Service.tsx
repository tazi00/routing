import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
function Service() {
  // console.log(data);
  const location = useLocation();
  console.log(location);

  return <div>Service</div>;
}

export default Service;
