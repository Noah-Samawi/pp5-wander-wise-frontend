import axios from "axios";


axios.defaults.baseURL = "https://pp5-apis-e3b849e62ff3.herokuapp.com/";
//axios.defaults.baseURL = "https://8000-noahsamawi-pp5apis-5r1sq2rva56.ws-eu114.gitpod.io";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();