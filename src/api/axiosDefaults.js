import axios from "axios";


axios.defaults.baseURL = "https://pp5-wander-wise-frontend-63919ac97d38.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();