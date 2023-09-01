import React from "react";
import VideoItem from "./Components/VideoItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoItemProps from "./Types/VideoItemTypes";

function Videos() {
  const videoData = useSelector((state) => state.videos);

  const navigate = useNavigate();

  console.log(videoData);

  return (
    <main>
      <div className="video-container">
        {videoData.map((item: VideoItemProps) => (
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
