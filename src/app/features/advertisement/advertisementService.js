import axios from "axios";
import endpoints from "../../endpoints";

const API_URL = `${endpoints.apiBaseURL}/advertisements`;

const getAllAdvertisements = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

const advertisementService = {
  getAllAdvertisements,
};

export default advertisementService;
