import axios from "axios";

const url = import.meta.env?.VITE_APP_BASE_URL;
console.log(url);
const ApiService = {
  errorResponse: (error) => {
    console.log(error);
    throw error;
  },

  get: async (endpoint, params = {}) => {
    try {
      const response = await axios.get(`${url}/${endpoint}`, {
        params,
      });
      return response.data;
    } catch (error) {
      ApiService.errorResponse(error);
    }
  },
  post: async (endpoint, data) => {
    try {
      return await axios.post(`${url}/${endpoint}`, data);
    } catch (error) {
      ApiService.errorResponse(error);
    }
  },

  orderFood: (data) => ApiService.post("pizza", data),
};

export default ApiService;
