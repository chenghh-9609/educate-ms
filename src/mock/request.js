import {
  homeData,
  courseList,
  orderList,
  refundOrders,
  studentList,
  teacherList,
  carouselList,
  articleList,
  eventList,
  couponList,
} from "./data";
const url = process.env.REACT_APP_BASE_URL;
export default [
  {
    url: `${url}/api/gethomedata`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: homeData };
    },
  },
  {
    url: `${url}/api/getcourselist`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: courseList };
    },
  },
  {
    url: `${url}/api/getorderlist`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: orderList };
    },
  },
  {
    url: `${url}/api/getrefundlist`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: refundOrders };
    },
  },
  {
    url: `${url}/api/getstudentlist`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: studentList };
    },
  },
  {
    url: `${url}/api/getteacherlist`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: teacherList };
    },
  },
  {
    url: `${url}/api/getcarousellist`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: carouselList };
    },
  },
  {
    url: `${url}/api/getarticlelist`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: articleList };
    },
  },
  {
    url: `${url}/api/geteventlist`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: eventList };
    },
  },
  {
    url: `${url}/api/getcouponlist`,
    method: "get",
    respond: function (options) {
      return { status: 200, data: couponList };
    },
  },
];
