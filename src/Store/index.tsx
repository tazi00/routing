import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  //   middleware: [customMiddleware],
  //   devTools: process.env.NODE_ENV !== "production",
  //   preloadedState: initialState,
  //   enhancers: [customEnhancer],
});
export default store;
