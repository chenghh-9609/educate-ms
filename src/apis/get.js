import { defaultAPI } from "./request";

export function getHomeData() {
  return defaultAPI("/gethomedata");
}

export function getCourseList() {
  return defaultAPI("/getcourselist");
}

export function getOrderList() {
  return defaultAPI("/getallorders");
}

export function getRefundList() {
  return defaultAPI("/getrefundlist");
}

export function getStudentList() {
  return defaultAPI("/getstudentlist");
}

export function getTeacherList() {
  return defaultAPI("/getteacherlist");
}

export function getCarouselList() {
  return defaultAPI("/getcarousellist");
}

export function getArticleList() {
  return defaultAPI("/getarticlelist");
}

export function getEventList() {
  return defaultAPI("/geteventlist");
}

export function getCouponList() {
  return defaultAPI("/getcouponlist");
}