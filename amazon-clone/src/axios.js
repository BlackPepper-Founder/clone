import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-9c726/us-central1/api", //The API (cloud function) URL
});

export default instance;
