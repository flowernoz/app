import axios from "axios";

const mainURL = axios.create({
  baseURL: "https://app-backend-iota.vercel.app",
});

export default mainURL;
