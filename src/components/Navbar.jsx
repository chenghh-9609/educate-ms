import React, { Component, MutableRefObject, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Badge } from "antd";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineQuestionCircle,
  AiOutlineBell,
  AiOutlineCaretDown,
  AiOutlinePoweroff,
} from "react-icons/ai";
import avatar from "../assets/images/avatar.png";
import { useSelector } from "react-redux";
const Navbar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleMenu = () => {
    props.toggleMenu();
    setCollapsed(!collapsed);
  };
  const curMenu = useSelector((state) => state.menu.value);
  return (
    <div className={`navbar `}>
      <div className="title">
        <div className="collapse-btn" onClick={toggleMenu}>
          {collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </div>
        <Breadcrumb size="large">
          {curMenu.map((item) => (
            <Breadcrumb.Item key={item.path || item}>
              {item.path ? <Link to={item.path}>{item.name}</Link> : item}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
      <div className="profile">
        <div className="help">
          <AiOutlineQuestionCircle />
        </div>
        <div className="notify">
          <Badge count={5}>
            <AiOutlineBell />
          </Badge>
        </div>
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="user">
          <span>管理员：00220</span>
          <AiOutlineCaretDown />
        </div>
        <div className="logout">
          <AiOutlinePoweroff />
          <span>退出</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
