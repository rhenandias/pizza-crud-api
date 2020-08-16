import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_URL
    : process.env.REACT_APP_DEPLOY_URL;

const api = axios.create({ baseURL: url });

console.log(url);

export default api;
