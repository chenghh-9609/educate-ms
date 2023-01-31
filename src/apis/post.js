import { defaultAPI } from "./request";
export function createTeacher(params) {
  return defaultAPI("/createteacher", params, "post");
}

export function createCourse(params) {
  return defaultAPI("/createcourse", params, "post");
}