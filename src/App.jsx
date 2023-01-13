import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./styles/app.scss";
import { Outlet } from "react-router-dom";
function App() {
  const childSidebar = React.createRef();
  const childNavbar = React.createRef();
  const [collapsed, setCollapsed] = useState(false);
  const toggleMenu = () => {
    childSidebar.current.toggleCollapse();
    setCollapsed(!collapsed);
  };
  return (
    <div className="app">
      <Sidebar onRef={childSidebar} />
      <main className={collapsed ? "main-fold" : "main-unfold"}>
        <Navbar onRef={childNavbar} toggleMenu={toggleMenu} />
        <div style={{ margin: "2rem" }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
