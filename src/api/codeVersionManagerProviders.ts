import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

export const getAllCodeVersionProviders = async (token: string) => {
  const response = await axios.get(`${BASE_API_URL}/code-version-providers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
