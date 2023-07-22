import axios from "axios";
import { getCookie } from "../../../pkg/universalCookies";
import endpoints from "../../endpoints";

const API_URL = `${endpoints.apiBaseURL}/categories`;

const addCategory = async (data) => {
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  console.log("headers:", headers);

  const response = await axios.post(`${API_URL}`, data, { headers });
  return response.data;
};

const getCategories = async (limit, page, sub) => {
  const accessToken = getCookie("accessToken");
  console.log("access token:", accessToken);
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.get(`${API_URL}`, {
    headers,
    params: {
      limit,
      page,
      sub,
    },
  });
  return response.data;
};

const updateCategory = async (data) => {
  const accessToken = getCookie("accessToken");
  console.log("data in slice:", data);
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.patch(`${API_URL}`, data, {
    headers,
  });
  return response.data;
};

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
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.delete(`${API_URL}/${id}`, { headers });
  return response.data;
};

const categoryService = {
  addCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};

export default categoryService;
