import API from "./fetch";

export const defaultAPI = API.create(`${process.env.REACT_APP_BASE_URL}/api`);
