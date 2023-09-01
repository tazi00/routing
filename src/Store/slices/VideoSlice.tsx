import { createSlice } from "@reduxjs/toolkit";
import VideoItemProps from "../../Pages/Videos/Types/VideoItemTypes";
const videoData: VideoItemProps = [
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
const videoSlice = createSlice({
  name: "videos",
  initialState: videoData || [],
  reducers: {
    getVideoDetails: (state, action) => {},
  },
});
export const { getVideoDetails } = videoSlice.actions;
export default videoSlice.reducer;
