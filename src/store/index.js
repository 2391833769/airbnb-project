import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home/homeReducer";
import detailReducer from "./detail";
import mainReducer from "./main";

const store = configureStore({
  reducer: {
    homeReducer: homeReducer,
    detailReducer: detailReducer,
    mainReducer:mainReducer
    
  }
});

export default store;