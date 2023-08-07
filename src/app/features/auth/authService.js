import axios from "axios";
import {
  getCookie,
  removeCookie,
  setCookie,
} from "../../../pkg/universalCookies";
import endpoints from "../../endpoints";

const API_URL = `${endpoints.apiBaseURL}/auth`;

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    let tokenOptions = {
      path: "/",
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    };
    setCookie("accessToken", response.data.accessToken, tokenOptions);
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    let tokenOptions = {
      path: "/",
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    };
    setCookie("accessToken", response.data.accessToken, { tokenOptions });
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data;
};

const logout = async () => {
  const response = await axios.get(`${API_URL}/logout`);
  if (response.data.success) {
    let tokenOptions = {
      path: "/",
    };
    removeCookie("accessToken", tokenOptions);
    localStorage.removeItem("user");
  }
  return response.data;
};

const forgotPassword = async (userData) => {
  const response = await axios.post(`${API_URL}/forgot-password`, userData);
  return response.data;
};

const resetPassword = async (userData) => {
  const response = await axios.put(`${API_URL}/reset-password`, userData);
  return response.data;
};

const getMe = async (accessToken) => {
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.get(`${API_URL}/me`, { headers });
  if (response.date) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data;
};

const getUsers = async (accessToken) => {
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.get(`${API_URL}/users`, { headers });
  return response.data;
};

const updateUser = async (userData, type) => {
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  let url = `${API_URL}/users`;
  if (type == "changePassword") {
    url = `${API_URL}/users/change-password`;
  }
  const response = await axios.patch(`${url}`, userData, { headers });
  return response.data;
};

const deleteUser = async (data) => {
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.delete(`${API_URL}/users`, { headers, data });
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getMe,
  updateUser,
  getUsers,
  deleteUser,
};

export default authService;
