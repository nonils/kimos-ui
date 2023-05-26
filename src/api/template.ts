import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

// @ts-ignore
export const getAllTemplates = ({ callback, search = '', page = 0, size = 10 }) => {
  axios.get(`${BASE_API_URL}/templates`, { params: { page, size, search } }).then((response) => {
    callback(response.data);
  });
};

export const getAllCICDProviders = (callback: (data: any) => void) => {
  axios.get(`${BASE_API_URL}/cicd-providers`).then((response) => {
    callback(response.data);
  });
};
export const getAllCodeVersionProviders = (callback: (data: any) => void) => {
  axios.get(`${BASE_API_URL}/code-version-providers`).then((response) => {
    callback(response.data);
  });
};
