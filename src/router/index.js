import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { routes } from "./config";

const renderRouter = (routes) =>
  routes.map((item) => {
    const { path, children, exact } = item;
    // if (!noAuth) {
    //   return <Route path="*" element={<Navigate to="/login" />}></Route>;
    // }
    return (
      <Route key={path} path={path} exact={exact} element={<item.component />} state={item.state}>
        {!!children &&
          children.map((i) => (
            <Route
              key={i.path}
              path={i.path}
              exact={i.exact}
              element={i.component}
            ></Route>
          ))}
      </Route>
    );
  });

export default React.memo(() => (
  <Router>
    <Routes>{renderRouter(routes)}</Routes>
  </Router>
));
