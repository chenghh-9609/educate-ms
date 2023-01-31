import React from "react";
import ReactDOM from "react-dom/client";
import RenderRouter from "./router";
import store from "./store";
import { Provider } from "react-redux";
// 开启数据模拟
import "./mock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RenderRouter />
  </Provider>
);
