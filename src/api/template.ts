import axios from 'axios';
import { BASE_API_URL } from '../config/constants';
import { ISelectOption } from '../types';

type GetAllTemplatesParams = {
  callback: (data: any) => void;
  search?: string;
  cloudProvider?: ISelectOption;
  codeVersionManagerProvider?: ISelectOption;
  CICDProvider?: ISelectOption;
  page?: number;
  size?: number;
};

export const getAllTemplates = ({
  callback,
  search = '',
  cloudProvider,
  codeVersionManagerProvider,
  CICDProvider,
  page = 0,
  size = 10,
}: GetAllTemplatesParams) => {
  axios
    .get(`${BASE_API_URL}/templates`, {
      params: {
        page,
        cloudProvider: cloudProvider?.value,
        codeVersionManagerProvider: codeVersionManagerProvider?.value,
        CICDProvider: CICDProvider?.value,
        size,
        search,
      },
    })
    .then((response) => {
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
export const getAllCloudProviders = (callback: (data: any) => void) => {
  axios.get(`${BASE_API_URL}/cloud-providers`).then((response) => {
    callback(response.data);
  });
};

export const getAllTemplateImplementations = (id: string, callback: (data: any) => void) => {
  axios.get(`${BASE_API_URL}/templates/${id}/implementations`).then((response) => {
    callback(response.data);
  });
};
