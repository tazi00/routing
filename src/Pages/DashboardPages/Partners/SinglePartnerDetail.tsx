import React from "react";
import { useParams } from "react-router-dom";
const data = {
  users: [
    { id: 1, name: "Tony", age: "30", alias: "Ironaman", team: "Avenger" },
    {
      id: 2,
      name: "steve",
      age: "30",
      alias: "Captain america",
      team: "Avenger",
    },
    { id: 3, name: "thor", age: "30", alias: "Thor", team: "Avenger" },
    { id: 4, name: "banner", age: "30", alias: "hulk", team: "Avenger" },
  ],
};

function SinglePartnerDetail() {
  const { id } = useParams();
  const user = data.users.find((user) => user.id === +id);

  console.log(id);

  return (
    <div>
      <h3>{user?.name}</h3>
      <ul>
        <li>{user?.age}</li>
        <li>{user?.alias}</li>
        <li>{user?.team}</li>
      </ul>
    </div>
  );
}

export default SinglePartnerDetail;
