import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.7.169:4000/",
});

export default instance;
