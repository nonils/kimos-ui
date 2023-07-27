import axios from 'axios';
import { BASE_API_URL } from '../config/constants';
import { GetAllTemplatesParams } from '../types';

export const getAllTemplates = async ({
  search = '',
  token,
  cloudProvider,
  codeVersionManagerProvider,
  CICDProvider,
  page = 0,
  size = 10,
}: GetAllTemplatesParams) => {
  const response = await axios.get(`${BASE_API_URL}/templates`, {
    params: {
      page,
      cloudProvider: cloudProvider?.value,
      codeVersionManagerProvider: codeVersionManagerProvider?.value,
      CICDProvider: CICDProvider?.value,
      size,
      search,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
