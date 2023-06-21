import { ICreateProjectDTO, IProject } from '../types';
import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

export const createProject = async (
  body: ICreateProjectDTO,
  accessToken: string | undefined,
): Promise<IProject> => {
  const result = await axios.post<IProject>(`${BASE_API_URL}/projects`, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return result.data;
};
