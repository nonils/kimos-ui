import { ICreateApplicationDTO, ILightProject } from '../types';
import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

export const createApplication = async (
  body: ICreateApplicationDTO,
  accessToken: string | undefined,
): Promise<ILightProject> => {
  const result = await axios.post<ILightProject>(`${BASE_API_URL}/projects`, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return result.data;
};
