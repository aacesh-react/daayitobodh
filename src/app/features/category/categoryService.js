import axios from "axios";
import {
  getCookie,
  removeCookie,
  setCookie,
} from "../../../pkg/universalCookies";
import endpoints from "../../endpoints";

const API_URL = `${endpoints.apiBaseURL}/categories`;
const accessToken = getCookie("accessToken");
const addCategory = async (data) => {
  console.log("access token:", accessToken);
  const headers = { Authorization: `Bearer ${accessToken}` };
  console.log("headers:", headers);

  const response = await axios.post(`${API_URL}`, data, headers);
  return response.data;
};

// const getRoles = async (accessToken) => {
//   const headers = { Authorization: `Bearer ${accessToken}` };
//   const response = await axios.get(`${API_URL}`, { headers });
//   return response.data;
// };

// const deleteByUserAndRole = async (data) => {
//   const accessToken = getCookie("accessToken");
//   console.log("data:", accessToken, data);
//   const headers = { Authorization: `Bearer ${accessToken}` };
//   const response = await axios.delete(`${API_URL}`, {
//     data,
//     headers,
//   });
//   return response.data;
// };

const deleteCategory = async (id) => {
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.delete(`${API_URL}/${id}`, { headers });
  return response.data;
};

const categoryService = {
  addCategory,
  deleteCategory,
};

export default categoryService;
