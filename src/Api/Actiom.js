import axios from "axios";
// import { Notification } from "carbon-components";
import qs from "qs";
// import { message } from "antd";
const baseUrl = "https://api-demo.vaartani.com/vaartani/ai/api/";

const GET = "GET";
const DELETE = "DELETE";
const POST = "POST";
const PUT = "PUT";
const PATCH = "PATCH";

let cache = [];
const cancel = [];
const ACTION_HANDLERS = {
  [GET]: (url, data) => {
    let queryUrl = url;
    if (data !== undefined) {
      const query = qs.stringify(data);
      queryUrl = `${queryUrl}?${query}`;
    }
    return axios.get(baseUrl + queryUrl, {
      // withCredentials: true,
      cancelToken: new axios.CancelToken((c) => {
        cancel.push({ url, c });
      }),
    });
  },
  [DELETE]: (url, data) => axios.delete(baseUrl + url, { data }),
  [POST]: (url, data) => axios.post(baseUrl + url, data),
  [PUT]: (url, data) => axios.put(baseUrl + url, data),
  [PATCH]: (url, data) => axios.patch(baseUrl + url, data),
};

export const setHeaders = (contentType, authToken) => {
  // set auth token

  // if (authToken) {
  //   const token = getToken();
  //   if (token) {
  //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //   } else {
  //     delete axios.defaults.headers.common.Authorization;
  //   }
  // }

  // set contentType
  if (contentType) {
    axios.defaults.headers.post["Content-Type"] = contentType;
    axios.defaults.headers.post.Accept = "application/json";
  } else {
    delete axios.defaults.headers.post["Content-Type"];
  }
};

export const showErrorAsToast = (error, type) => {
  const { response } = error;
  if (response?.data) {
    const { errors, message: msg } = response.data;
    if (errors) {
      Object.keys(errors).forEach((x) => {
        if (typeof errors[x] === "object") {
          Object.keys(errors[x]).forEach((y) => {
            // message.error(errors[x][y]);
          });
        } else if (Array.isArray(errors[x])) {
          errors[x].map((e) => console.error(e));
        }
      });
    }
    if (msg !== undefined && typeof msg === "string") {
      // message.error(msg);
    }
  } else if (type.toUpperCase() !== "GET") {
    // message.error('Something went wrong, Please do try again !');
  }
  // if (response?.status === 401) {
  //   LocalStorage.clean();
  //   window.location.href = routes.login;
  // }
  cache = [];
  return Promise.reject(error);
};

export const fetchUrl = (
  type,
  url,
  data,
  authToken = true,
  fetchBaseResponse = false,
  contentType,
  shouldRefetch
) => {
  setHeaders(contentType, authToken);
  if (!shouldRefetch) {
    if (type.toUpperCase() === "GET") {
      if (cache.indexOf(url) !== -1) {
        const controller = cancel.filter((i) => i.url === url);
        controller.map((item) => item.c());
      } else {
        cache.push(url);
      }
    }
  }
  const handler = ACTION_HANDLERS[type.toUpperCase()];
  return !fetchBaseResponse
    ? handler(url, data)
        .then((res) => Promise.resolve(res.data, res))
        .catch((error) => showErrorAsToast(error, type))
    : handler(url, data).catch((error) => showErrorAsToast(error, type));
};
