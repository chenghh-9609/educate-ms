import fetchMock from "fetch-mock";
import api from "./request";
api.forEach((item) => {
  const { url, method, respond } = item;
  if (method == "get") {
    fetchMock.get(url, respond);
  } else {
    fetchMock.post(url, respond);
  }
});
