import axios from "axios";


//axios.defaults.baseURL = "https://pp5-wander-wise-frontend-63919ac97d38.herokuapp.com/";
axios.defaults.baseURL = "https://8000-noahsamawi-pp5apis-dcnxiuc6e2p.ws-eu114.gitpod.io";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();