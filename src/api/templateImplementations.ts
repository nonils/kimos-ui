import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

export const getAllTemplateImplementations = async (id: string, token: string) => {
  const response = await axios.get(`${BASE_API_URL}/templates/${id}/implementations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
