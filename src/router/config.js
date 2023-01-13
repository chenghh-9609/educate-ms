import { Skeleton } from "antd";
import React from "react";
import App from "../App";

const lazyload = (menu, component) => {
  const Comp = React.lazy(component);
  return (
    <React.Suspense fallback={<Skeleton active />}>
      <Comp menu={menu} />
    </React.Suspense>
  );
};

export const routes = [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/",
        exact: true,
        component: lazyload(["首页"], () =>
          import(/* webpackChunkName: "Home" */ "../pages/home/Home")
        ),
      },
      {
        path: "/course",
        component: lazyload(["课程管理"], () =>
          import(/* webpackChunkName: "Course" */ "../pages/course/Course")
        ),
      },
      {
        path: "/order",
        component: lazyload(["订单管理", "订单"], () =>
          import(/* webpackChunkName: "Order" */ "../pages/order/Order")
        ),
      },
      {
        path: "/refund",
        component: lazyload(["订单管理", "退款"], () =>
          import(/* webpackChunkName: "Order" */ "../pages/order/Refund")
        ),
      },
      {
        path: "/student",
        component: lazyload(["用户管理", "学员"], () =>
          import(/* webpackChunkName: "Order" */ "../pages/users/Student")
        ),
      },
      {
        path: "/teacher",
        component: lazyload(["用户管理", "讲师"], () =>
          import(/* webpackChunkName: "Order" */ "../pages/users/Teacher")
        ),
      },
      {
        path: "/carousel",
        component: lazyload(["资讯管理", "轮播图"], () =>
          import(/* webpackChunkName: "Order" */ "../pages/news/Carousel")
        ),
      },
      {
        path: "/article",
        component: lazyload(["资讯管理", "文章"], () =>
          import(/* webpackChunkName: "Order" */ "../pages/news/Article")
        ),
      },
      {
        path: "/event",
        component: lazyload(["促销管理", "促销活动"], () =>
          import(/* webpackChunkName: "Order" */ "../pages/sales/Event")
        ),
      },
      {
        path: "/coupon",
        component: lazyload(["促销管理", "优惠券"], () =>
          import(/* webpackChunkName: "Order" */ "../pages/sales/Coupon")
        ),
      },
      {
        path: "/setting",
        component: lazyload(["系统管理"], () =>
          import(/* webpackChunkName: "Order" */ "../pages/setting")
        ),
      },
    ],
  },
];
