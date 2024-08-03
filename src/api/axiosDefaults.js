import axios from "axios";

// Set the base URL for all Axios requests
axios.defaults.baseURL = "https://pp5-apis-e3b849e62ff3.herokuapp.com/";
// Uncomment the following line and comment the above line to switch base URL
// axios.defaults.baseURL = "https://8000-noahsamawi-pp5apis-5r1sq2rva56.ws-eu114.gitpod.io";

// Set the default Content-Type for POST requests
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

// Allow credentials to be included in requests
axios.defaults.withCredentials = true;

// Create separate Axios instances for requests and responses
export const axiosReq = axios.create();
export const axiosRes = axios.create();
