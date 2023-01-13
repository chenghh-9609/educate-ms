import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import menuSlicer from "./menu";

export default configureStore({
  reducer: {
    counter: counterReducer,
    menu: menuSlicer,
  },
});
