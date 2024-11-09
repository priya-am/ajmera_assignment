import axios from 'axios';
import { ProfileData } from '../types';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const apiService = {
  fetchProfiles: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/profile`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profiles:", error);
      throw error;
    }
  },

  saveProfile: async (profileData: ProfileData) => {
    return axios.post(`${apiBaseUrl}/profile`, profileData);
  },

  updateProfile: async (id: number, profileData: ProfileData) => {
    return axios.put(`${apiBaseUrl}/profile/${id}`, profileData);
  },

  deleteProfile: async (id: number) => {
    return axios.delete(`${apiBaseUrl}/profile/${id}`);
  },
};

export default apiService;


