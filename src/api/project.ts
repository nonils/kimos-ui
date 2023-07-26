import { ICreateAccountProjectDTO, ILightProject, IProjectDetail } from '../types';
import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

export const getProjects = async (
  accessToken: string,
  page: number = 0,
  size: number = 10,
): Promise<ILightProject[]> => {
  const result = await axios.get<ILightProject[]>(`${BASE_API_URL}/projects`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      page,
      size,
    },
  });
  return result.data;
};

export const getProjectById = async (projectId: string, accessToken: string | undefined) => {
  const result = await axios.get<IProjectDetail>(`${BASE_API_URL}/projects/${projectId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return result.data;
};

export const createAccountProject = async (
  body: ICreateAccountProjectDTO,
  accessToken: string | undefined,
): Promise<any> => {
  const result = await axios.post<any>(`${BASE_API_URL}/projects`, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return result.data;
};

/*TODO this should be removed to applciation*/
export const createProjectApplication = async (
  body: ICreateAccountProjectDTO,
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
