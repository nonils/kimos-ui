import projectReducerConstant from '../constants/reducers/projects';
import { createAccountProject, getProjects } from '../api';
import { ICreateAccountProjectDTO } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProjectsAction =
  (accessToken: string, page: number = 0, size: number = 10) =>
  async (dispatch: any) => {
    dispatch({
      type: projectReducerConstant.GET_PROJECTS_REQUEST,
    });
    try {
      const response = await getProjects(accessToken, page, size);
      dispatch({
        type: projectReducerConstant.GET_PROJECTS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: projectReducerConstant.GET_PROJECTS_FAILURE,
        payload: error,
      });
    }
  };

export const createProjectAction = (
  body: ICreateAccountProjectDTO,
  accessToken: string | undefined,
) => {
  return async (dispatch: any) => {
    dispatch({
      type: projectReducerConstant.CREATE_PROJECT_REQUEST,
    });
    try {
      const response = await createAccountProject(body, accessToken);
      dispatch({
        type: projectReducerConstant.CREATE_PROJECT_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: projectReducerConstant.CREATE_PROJECT_FAILURE,
        payload: error,
      });
    }
  };
};
