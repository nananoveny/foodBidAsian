// import { environment } from "config/environments";
import axios from "axios";

// const ssvApiEndPoint: string = environment.ssvApiEndPoint;

const api = axios.create({
  baseURL: "https://freelance-job-be-production.up.railway.app/",
  headers: {
    type: "json",
  },
});

api.interceptors.request.use(
  function (config) {
    config = {
      ...config,
    };
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);
const request = (method, url, params) => {
  return api.request({
    method,
    url,
    ...(Object.keys(params).length > 0 && { ...params }),
  });
};

export const postRequest = (url, payload) => {
  return request("POST", url, {
    data: payload,
  });
};

export const getRequest = (url, params, extraHeaders) => {
  return request("GET", url, {
    params: new URLSearchParams(params).toString(),
    headers: extraHeaders,
  });
};

export default api;
