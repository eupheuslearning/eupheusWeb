import axios from "axios";

const instance = axios.create({
  baseURL: "https://stage1.eupheus.in/",
});

export default instance;
