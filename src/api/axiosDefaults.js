import axios from "axios";

axios.defaults.baseURL = "https://pp5-apis-e3b849e62ff3.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;