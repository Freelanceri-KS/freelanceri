import axios from "axios";

let token = window.localStorage.getItem("token");
const defaultInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
  },
});
// defaultInstance.interceptors.request.use(function (config) {
//   config.headers["Authorization"] = "Bearer " + token;
//   return config;
// });

export default defaultInstance;