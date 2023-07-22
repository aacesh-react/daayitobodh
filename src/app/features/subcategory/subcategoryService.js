import axios from "axios";
import { getCookie } from "../../../pkg/universalCookies";
import endpoints from "../../endpoints";

const API_URL = `${endpoints.apiBaseURL}/subcategories`;

const addSubcategory = async (data) => {
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.post(`${API_URL}`, data, { headers });
  return response.data;
};

const getSubcategories = async (limit, page) => {
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.get(`${API_URL}`, {
    headers,
    params: {
      limit,
      page,
    },
  });
  return response.data;
};

const updateSubcategory = async (data) => {
  const accessToken = getCookie("accessToken");
  console.log("data in slice:", data);
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.patch(`${API_URL}`, data, {
    headers,
  });
  return response.data;
};

const deleteSubcategory = async (id) => {
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.delete(`${API_URL}/${id}`, { headers });
  return response.data;
};

const subcategoryService = {
  addSubcategory,
  getSubcategories,
  updateSubcategory,
  deleteSubcategory,
};

export default subcategoryService;
