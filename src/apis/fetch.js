function requestError(error) {
  console.log(error);
}

const fetchGet = (url, params) => {
  let list = [];
  for (let key in params) {
    list.push(`${key}=${params[key]}`);
  }
  const data = list.join("&");
  const allUrl = params && params.length ? `${url}?${data}` : url;
  return fetch(allUrl)
    .then((res) => res.json())
    .catch((error) => requestError(error));
};

const fetchPost = (url, params) => {
  let formData = new FormData();
  for (let key in params) {
    formData.append(key, params[key]);
  }

  return fetch(url, {
    method: "POST",
    body: formData || JSON.stringify(params),
  })
    .then((res) => res.json())
    .catch((error) => requestError(error));
};

function fetchAPI(url, params, method = "GET") {
  if (method === "GET" || method === "get") return fetchGet(url, params);
  return fetchPost(url, params);
}

export default {
  create: (base) => {
    return function (url, ...args) {
      return fetchAPI(base + url, ...args);
    };
  },
};
