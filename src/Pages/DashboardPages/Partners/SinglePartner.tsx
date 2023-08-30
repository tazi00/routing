import React from "react";
import { useParams, Link } from "react-router-dom";
const data = {
  users: [
    { id: 1, name: "Tony" },
    { id: 2, name: "steve" },
    { id: 3, name: "thor" },
    { id: 4, name: "banner" },
  ],
};

function SinglePartner() {
  const { id } = useParams();

  const user = data.users.find((user) => user.id === +id);
  // console.log(user);

  return (
    <div>
      SinglePartner {" " + user?.name}{" "}
      <Link to="detail">details of {" " + user?.name}</Link>
    </div>
  );
}

export default SinglePartner;
