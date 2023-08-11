import { ICreateApplicationDTO, ILightApplication, ILightProject } from '../types';
import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

export const getApplicationsByProjectId = async (projectId: string, token: string) => {
  const result = await axios.get<ILightApplication[]>(
    `${BASE_API_URL}/projects/${projectId}/applications`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return result.data;
};

export const createApplication = async (
  body: ICreateApplicationDTO,
  accessToken: string | undefined,
): Promise<ILightProject> => {
  const result = await axios.post<ILightProject>(`${BASE_API_URL}/applications`, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return result.data;
};
