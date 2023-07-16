import axios from "axios";
import { removeCookie, setCookie } from "../../../pkg/universalCookies";
import endpoints from "../../endpoints";

const API_URL = `${endpoints.apiBaseURL}/${endpoints.roles}`;
const addRole = async (name, accessToken) => {
  console.log("access token:", accessToken);
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.post(`${API_URL}`, name, headers);
  return response.data;
};

const getRoles = async (accessToken) => {
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.get(`${API_URL}`, { headers });
  return response.data;
};

const deleteRole = async (accessToken) => {
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.delete(`${API_URL}`, { headers });
  return response.data;
};

const roleService = {
  addRole,
  getRoles,
  deleteRole,
};

export default roleService;
