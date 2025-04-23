// export const API_URL = "https://fakestoreapi.in/api/products";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});
export default instance;
