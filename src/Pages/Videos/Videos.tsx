import React from "react";
import VideoItem from "./Components/VideoItem";
import { Link, useNavigate } from "react-router-dom";
const videoData = [
  {
    id: 1,
    title: "Making of Amazing Spiderman",
    channel: "sony enterprises",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGBAjjWVxCatZA6E2JQ97TwtrhXBEPqY5Sg&usqp=CAU",
    channelLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vXEpmUKbZ4_hqXBbCPIU0wZCxWCbcKnfvLN-etEjyBS27nm5lc0DnrY7udfrQ9GjeWU&usqp=CAU",
    description: "This video is for entertaining purpose",
    details: { views: 2, timePass: "2 months" },
  },
  {
    id: 2,
    title: "Behind the Scenes: Movie Magic",
    channel: "CineMagic Studios",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sC0FeJrPfTXlxkmuOwxw1I3LgVQ9H9Oseg&usqp=CAU",
    channelLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQ89ejm4TF9YAkxJ-65Z5mk2XkiJn2K509g&usqp=CAU",
    description: "Discover the secrets behind movie-making!",
    details: { views: 200, timePass: "45 minutes" },
  },
  // Add more video objects as needed
];

function Videos() {
  const navigate = useNavigate();
  // function sendData(id, data) {
  //   navigate(id, { state: data });
  //   console.log(id, data);
  // }
  // Make sure to pass the videoData as a prop
  return (
    <main>
      <div className="video-container">
        {videoData.map((item) => (
          <React.Fragment key={item.id}>
            <div
              onClick={() => {
                navigate("" + item.id, { state: item });
              }}
            >
              <VideoItem {...item} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}

export default Videos;
