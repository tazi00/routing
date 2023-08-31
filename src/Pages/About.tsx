import React from "react";
import { useLoaderData } from "react-router-dom";

function About() {
  const data = useLoaderData();
  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}

export default About;
export async function loader() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!data.ok) {
    // ...
  } else {
    const resData = await data.json();
    return resData;
  }
}
