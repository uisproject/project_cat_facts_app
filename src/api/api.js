import axios from "axios";

export const controller = new AbortController();

const instance = axios.create({
  signal: controller.signal,
  baseURL: "https://cat-fact.herokuapp.com",
});

export default instance;
