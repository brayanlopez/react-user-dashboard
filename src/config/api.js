import axios from "axios";

// if there is required any autthentication it´ll be put here in the object required.
export const api = axios.create({
  baseURL: "",
  timeout: 2000,
});
