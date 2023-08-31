import React from "react";
import VideoItemProps from "../Types/VideoItemTypes";

function VideoItem({
  title = "Amazing Spiderman Remaking",
  thumbnailUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltLvvpktPs7nLiiA7k1Mm-mO6Z2_0yCNHpQ&usqp=CAU",
  channelLogoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGVeTKnX-KCZWE-X8KOLUHDpTs1wDgFQ5hQ&usqp=CAU",
  channel = "sony enterprises",
  description = "This video is for entertaining purpose",
  details = { views: 2, timePass: "2 months" },
}: VideoItemProps) {
  return (
    <div className="video-box">
      <figure>
        <img src={thumbnailUrl} alt="" />
      </figure>
      <div className="video-title">
        <h3>{title}</h3>
        <h4>
          <img src={channelLogoUrl} alt="" />
          {channel}
        </h4>
        <small>{description}</small>
        <ul>
          <li> {details.views} views</li>
          <li> {details.timePass}</li>
        </ul>
      </div>
    </div>
  );
}

export default VideoItem;
