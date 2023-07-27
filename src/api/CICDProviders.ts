import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

export const getAllCICDProviders = async (token: string) => {
  const response = await axios.get(`${BASE_API_URL}/cicd-providers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
