import React from "react";
import { useLocation } from "react-router-dom";
import VideoPlayer from "./Components/VideoPlayer";

function VideosDetails() {
  const location = useLocation();
  const videodetail = location.state;
  console.log(videodetail);

  return (
    <div className="detail-page">
      <div className="container">
        <div className="grid">
          <div className="video-player">
            <figure>
              {/* <img src={videodetail.thumbnailUrl} alt="" /> */}
              <VideoPlayer thumbnail={videodetail.thumbnailUrl} />
            </figure>
            <div className="video-text">
              <h3>{videodetail.title}</h3>
              <div className="video-options">
                <ul className="left">
                  <li>
                    <h6>
                      <img src={videodetail.channelLogoUrl} alt="" />
                      <span>
                        {videodetail.channel} <b>6.131 subscribers</b>
                      </span>
                    </h6>
                  </li>
                  <li>
                    <button className="pm-btn">subscribe</button>
                  </li>
                </ul>
                <ul className="right">
                  <li>like btns</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="video-list">
            <div className="video-item">video item1</div>
            <div className="video-item">video item2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosDetails;
