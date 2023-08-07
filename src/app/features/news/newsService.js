import axios from "axios";
import { getCookie } from "../../../pkg/universalCookies";
import endpoints from "../../endpoints";

const API_URL = `${endpoints.apiBaseURL}/news`;
const BREAKING_API_URL = `${endpoints.apiBaseURL}/breaking-news`;

const getCategoryNews = async (
  limit,
  page,
  categoryId,
  content,
  isPublished
) => {
  const response = await axios.get(`${API_URL}/categories`, {
    params: {
      limit,
      page,
      categoryId,
      isPublished,
      content,
    },
  });
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

const getAllNews = async (limit, page, content, isPublished) => {
  const response = await axios.get(`${API_URL}`, {
    params: {
      limit,
      page,
      content,
      isPublished,
    },
  });
  return response.data;
};

const getNewsById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const getBreakingNews = async () => {
  const response = await axios.get(`${BREAKING_API_URL}`);
  return response.data;
};

const newsService = {
  getCategoryNews,
  getSubcategoryNews,
  getHomepageNews,
  getLatestNews,
  getNewsById,
  // getAllNews,
  getBreakingNews,
};

export default newsService;
