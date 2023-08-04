import axios from "axios";
import { getCookie } from "../../../pkg/universalCookies";
import endpoints from "../../endpoints";

const API_URL = `${endpoints.apiBaseURL}/advertisements`;

const addNews = async (data) => {
  const accessToken = getCookie("accessToken");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  };
  console.log("data:", data);
  const response = await axios.post(`${API_URL}`, data, { headers });
  return response.data;
};

const getCategoryNews = async (
  limit,
  page,
  categoryId,
  content,
  isPublished
) => {
  // const accessToken = getCookie("accessToken");
  // const headers = { Authorization: `Bearer ${accessToken}` };
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

const getAllAdvertisements = async () => {
  const accessToken = getCookie("accessToken");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const response = await axios.get(`${API_URL}`, {
    headers,
  });
  return response.data;
};

const getNewsById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const addAdvertisement = async (data) => {
  const accessToken = getCookie("accessToken");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  };
  console.log("data:", data);
  const response = await axios.patch(`${API_URL}/add`, data, {
    headers,
  });
  return response.data;
};

const deleteAdvertisement = async (data) => {
  const accessToken = getCookie("accessToken");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await axios.patch(`${API_URL}/delete`, data, {
    headers,
  });
  return response.data;
};

const updatePublishNews = async (data) => {
  const accessToken = getCookie("accessToken");
  console.log("data in service:", data);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  console.log("data:", data);
  const response = await axios.patch(`${API_URL}/published`, data, {
    headers,
  });
  return response.data;
};

const deleteNews = async (id) => {
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.delete(`${API_URL}/${id}`, { headers });
  return response.data;
};

const advertisementService = {
  // addNews,
  // getNewsById,
  getAllAdvertisements,
  addAdvertisement,
  deleteAdvertisement,
};

export default advertisementService;
