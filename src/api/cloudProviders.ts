import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

export const getAllCloudProviders = async (token: string) => {
  const response = await axios.get(`${BASE_API_URL}/cloud-providers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
