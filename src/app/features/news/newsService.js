import axios from "axios";
import { getCookie } from "../../../pkg/universalCookies";
import endpoints from "../../endpoints";

const API_URL = `${endpoints.apiBaseURL}/news`;

const addNews = async (data) => {
  const accessToken = getCookie("accessToken");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  };
  console.log("data:", data);
  // let response = await axios({
  //   url: "http://localhost:5000/",
  //   method: "POST",
  //   data,
  //   headers: { "Content-Type": "multipart/form-data" },
  // });
  const response = await axios.post(`${API_URL}`, data, { headers });
  return response.data;
};

const getSubcategoryNews = async (limit, page, subCategoryId, content) => {
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.get(`${API_URL}/subcategories`, {
    headers,
    params: {
      limit,
      page,
      subCategoryId,
      content,
    },
  });
  return response.data;
};

const getHomepageNews = async (limit) => {
  const response = await axios.get(`${API_URL}/homepage`, {
    params: {
      content,
      limit,
    },
  });
  return response.data;
};

const getLatestNews = async (limit) => {
  const response = await axios.get(`${API_URL}`, {
    params: {
      limit,
    },
  });
  return response.data;
};

// const getSubcategories = async (limit, page) => {
//   const accessToken = getCookie("accessToken");
//   const headers = { Authorization: `Bearer ${accessToken}` };
//   const response = await axios.get(`${API_URL}`, {
//     headers,
//     params: {
//       limit,
//       page,
//     },
//   });
//   return response.data;
// };

// const updateSubcategory = async (data) => {
//   const accessToken = getCookie("accessToken");
//   console.log("data in slice:", data);
//   const headers = { Authorization: `Bearer ${accessToken}` };
//   const response = await axios.patch(`${API_URL}`, data, {
//     headers,
//   });
//   return response.data;
// };

// const deleteSubcategory = async (id) => {
//   const accessToken = getCookie("accessToken");
//   const headers = { Authorization: `Bearer ${accessToken}` };
//   const response = await axios.delete(`${API_URL}/${id}`, { headers });
//   return response.data;
// };

const newsService = {
  addNews,
  getSubcategoryNews,
  getHomepageNews,
  getLatestNews,
  // getSubcategories,
  // updateSubcategory,
  // deleteSubcategory,
};

export default newsService;
