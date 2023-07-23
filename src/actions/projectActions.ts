import projectReducerConstant from '../constants/reducers/projects';
import { createAccountProject } from '../api';
import { ICreateAccountProjectDTO } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProjects = (page: number, size: number) => async (dispatch: any) => {
  dispatch({
    type: projectReducerConstant.GET_PROJECTS_REQUEST,
  });
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
