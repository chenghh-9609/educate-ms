import React, { useImperativeHandle, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoBookOutline } from "react-icons/io5";
import {
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineGift,
  AiOutlineSetting,
  AiOutlineTeam,
} from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { TbClipboardText } from "react-icons/tb";
import { Menu } from "antd";
import { useSelector } from "react-redux";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("首页", "/", <AiOutlineHome />),
  getItem("课程管理", "/course", <AiOutlineRead />),
  getItem("订单管理", "sub1", <TbClipboardText />, [
    getItem("订单", "/order"),
    getItem("退款", "/refund"),
  ]),
  getItem("用户管理", "sub2", <AiOutlineTeam />, [
    getItem("学员", "/student"),
    getItem("讲师", "/teacher"),
  ]),
  getItem("资讯管理", "sub3", <HiOutlineNewspaper />, [
    getItem("轮播图", "/carousel"),
    getItem("文章", "/article"),
  ]),
  getItem("促销管理", "sub4", <AiOutlineGift />, [
    getItem("促销活动", "/event"),
    getItem("优惠券", "/coupon"),
  ]),
  getItem("系统管理", "/setting", <AiOutlineSetting />),
];

const Sidebar = (props) => {
  const phoneDevice = document.documentElement.clientWidth < 768 ? true : false;
  const [collapsed, setCollapsed] = useState(phoneDevice ? true : false);
  const [defaultRoute, setDefaultRoute] = useState([]);
  const [isPhone, setIsPhone] = useState(phoneDevice);
  window.onresize = () => {
    setIsPhone(document.documentElement.clientWidth < 768 ? true : false);
  };
  // const [openKeys, setOpenKeys] = useState([]);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  useImperativeHandle(props.onRef, () => ({ toggleCollapse }));
  const navigate = useNavigate();
  const location = useLocation();
  const curMenu = useSelector((state) => state.menu.value);
  useEffect(() => {
    // const submenu = items.find((item) => item.label === curMenu[0]);
    // console.log(curMenu);
    // if (submenu.children) setOpenKeys([submenu.key]);
    setDefaultRoute([location.pathname]);
  }, []);

  const linkTo = ({ _, key }) => {
    navigate(key);
    setDefaultRoute([key]);
  };
  return (
    <Section
      className={`sidebar ${collapsed ? "side-fold" : "side-unfold"} ${
        isPhone
          ? collapsed
            ? "sidebar-phone-fold"
            : "sidebar-phone-unfold"
          : ""
      }`}
    >
      <div className="title">
        <IoBookOutline />
        {collapsed ? "" : <h2>教育管理系统</h2>}
      </div>
      <Menu
        selectedKeys={defaultRoute}
        // openKeys={openKeys}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={linkTo}
      ></Menu>
    </Section>
  );
};

export default Sidebar;

const Section = styled.section``;
