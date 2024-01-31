import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});
// axios.defaults.withCredentials = true;
export default app;
