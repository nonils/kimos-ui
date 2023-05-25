import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

// @ts-ignore
export const getAllTemplates = ({ callback, search = '', page = 0, size = 10 }) => {
  axios.get(`${BASE_API_URL}/templates`, { params: { page, size, search } }).then((response) => {
    callback(response.data);
  });
};
