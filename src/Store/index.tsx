import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import videosReducer from "./slices/VideoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosReducer,
  },
  //   middleware: [customMiddleware],
  //   devTools: process.env.NODE_ENV !== "production",
  //   preloadedState: initialState,
  //   enhancers: [customEnhancer],
});
export default store;
