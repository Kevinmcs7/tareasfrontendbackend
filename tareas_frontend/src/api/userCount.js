// api/userCount.js
import axios from "./axios";

export const getUserCountRequest = () => axios.get("/user-count");
