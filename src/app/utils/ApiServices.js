import axios from "axios";

 // Replace with your API base URL

const ApiServices = {
  // Example GET request
  get: async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.error("Error making GET request:", error);
      throw error;
    }
  },

  // Example POST request
  post: async (endpoint, data) => {
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("Error making POST request:", error);
      throw error;
    }
  },

  // Add other types of requests (PUT, DELETE, etc.) as needed
};

export default ApiServices;
